import startHistogramProcessing, { HistogramColumns } from '../../../services/processHistogram';

const handler = async (req, res) => {
  const histogramResult = await  startHistogramProcessing(HistogramColumns.Commodity);
  res.status(200).json(histogramResult);
}

export default handler;