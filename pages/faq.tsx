import Footer from '../components/Footer';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import FAQ from '../components/FAQ';
import type { NextPage } from 'next'

const FAQPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>5 Elrond Elements - FAQ</title>
        <meta name="description" content="A P2P decentralized exchange built on Elrond" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default FAQPage
