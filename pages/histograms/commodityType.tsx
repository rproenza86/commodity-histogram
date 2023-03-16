import Head from "next/head";

import Layout from "../../components/layout";
import { getHistogram } from "../../services/histogram";
import HistogramTable from "../../components/histogramTable";

export default function CommodityType({ histogramData, histogramName }) {
  return (
    <Layout>
      <Head>
        <title>{histogramName}</title>
      </Head>
      <h3>{histogramName}</h3>
      <HistogramTable histogramData={histogramData}/>
    </Layout>
  );
}

export async function getStaticProps() {
  let histogramData = {};

  try {
    histogramData = await getHistogram('commodityType');
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      histogramData,
      histogramName: 'Commodity Type Histogram'
    }
  }
}