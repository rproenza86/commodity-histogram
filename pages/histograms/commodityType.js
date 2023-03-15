import Head from "next/head";

import Layout from "../../components/layout";
import { getHistogram } from "../../services/histogram";
import HistogramTable from "../../components/histogramTable";

export default function Post({ histogramData, histogramName }) {
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
  const histogramData = await getHistogram('commodityType')

  return {
    props: {
      histogramData,
      histogramName: 'Commodity Type Histogram'
    }
  }
}
