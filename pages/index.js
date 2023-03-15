import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projections</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem} key="histograms/commodity">
              <Link href="histograms/commodity">Commodity Histograms</Link>
            </li>
          <li className={utilStyles.listItem} key="histograms/commodity">
              <Link href="histograms/commodityType">CommodityType Histograms</Link>
            </li>
        </ul>
      </section>
    </Layout>
  )
}
