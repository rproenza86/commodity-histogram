import fs from 'fs';
import { parse } from 'csv-parse';
import { finished } from 'stream/promises';

export enum HistogramColumns {
  Attribute = 0,
  Commodity,
  CommodityType,
  Units,
  YearType,
  Year,
  Value,
}

/**
 * Processes a histogram record by counting the occurrences of the specified column's value.
 * @param column The column to count values for.
 * @param record The histogram record to process.
 * @param histogramResults The map to store the histogram results in.
 */
const processHistogramRecord = (
  column: HistogramColumns,
  record: string[],
  histogramResults: Map<string, number>
): void => {
  const recordName = record[column];
  const occurrences = histogramResults.get(recordName) || 0;

  histogramResults.set(recordName, occurrences + 1);
};

/**
 * Processes a histogram file and returns the results as a map.
 * @param column The column to count values for.
 * @param filePath The path to the histogram file.
 * @returns A map containing the histogram results.
 */
const processHistogramFile = async (
  column: HistogramColumns,
  filePath: string
): Promise<Map<string, number>> => {
  const histogramResults = new Map<string, number>();
  const parser = fs.createReadStream(filePath).pipe(parse({ delimiter: ',' }));

  parser.on('readable', () => {
    let record;
    while ((record = parser.read()) !== null) {
      processHistogramRecord(column, record, histogramResults);
    }
  });

  await finished(parser);

  return histogramResults;
};

/**
 * Starts processing a histogram file and returns the results as a map.
 * @param column The column to count values for.
 * @returns A map containing the histogram results.
 */
const startHistogramProcessing = async (
  column: HistogramColumns,
  filePath?: string
): Promise<{}> => {
  try {
    const result = {}
    const _filePath =
      process.env.NEXT_ENV === 'dev'
        ? '/data/Projection2021.csv'
        : './public/data/Projection2021.csv';

    const histogramResults = await processHistogramFile(column, filePath || _filePath);

    // Exclude the first entry, which is the column header.
    const sanitizedData = new Map(
      Array.from(histogramResults.entries()).slice(1)
    );
    Array.from(sanitizedData.entries()).forEach(([key, value], index) => result[key] = value);
    
    return result;
  } catch (error) {
    console.error('Error processing histogram:', error);
    throw error;
  }
};

export default startHistogramProcessing;
