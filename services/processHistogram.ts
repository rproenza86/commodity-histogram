
// external libraries
import fs from 'fs';
import { parse } from 'csv-parse';
import { finished } from 'stream/promises';

// types definitions
interface Histogram {
    [key: string]: number;
}

export enum HistogramColumns {
    Attribute = 0,
    Commodity,
    CommodityType,
    Units,
    YearType,
    Year,
    Value
}

const histogramResults = new Map<string, number>();

const processHistogram = (column: HistogramColumns, record: string[]): void => {
    const word = record[column];
    const count = histogramResults.get(word) || 0;

    histogramResults.set(word, count + 1);
};

const startHistogramProcessing = async (column: HistogramColumns ) => {
    try {
        await processFile(column);

        const result = {}
        Array.from(histogramResults.entries()).forEach(([key, value], index) => {
          if(index !== 0)
            result[key] = value;
        });
        
        return result;
    } catch (error) {
          console.error('Error processing histogram',error);  
    }
};

const processFile = async (column: HistogramColumns ) => {
    const parser = fs
      .createReadStream('./__mocks__/Projection2021.csv')
      .pipe(parse({ delimiter: ','}));

    parser.on('readable', function(){
      let record; 
      
      while ((record = parser.read()) !== null) {
        processHistogram(column, record)
      }
    });

    await finished(parser); 
  };

export default startHistogramProcessing;