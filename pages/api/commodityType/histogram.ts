import type { NextApiRequest, NextApiResponse } from 'next';

import startHistogramProcessing, { HistogramColumns } from '../../../services/histogramProcessor';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const histogramResult = await startHistogramProcessing(HistogramColumns.CommodityType);
    return res.status(200).json(histogramResult);
  
  } 
    
  return res.status(405).json({ message: 'Not found' });
}

export default handler;