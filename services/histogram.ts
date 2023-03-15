import axios from "axios";

export const getHistogram = async (histogramName: string) => {
  const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/api/${histogramName}/histogram`;

  const result = await axios.get(endpoint);
  return result.data;
}