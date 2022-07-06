import Footer from '../components/Footer';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import type { NextPage } from 'next'
import Team from '../components/Team';

const FAQPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>5 Elrond Elements - Our team</title>
        <meta name="description" content="A P2P decentralized exchange built on Elrond" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Team />
      </main>
      <Footer />
    </div>
  )
}

export default FAQPage
