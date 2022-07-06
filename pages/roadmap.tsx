import Footer from '../components/Footer';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import type { NextPage } from 'next'
import Roadmap from '../components/Roadmap';

const RoadmapPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>5 Elrond Elements - Roadmap</title>
        <meta name="description" content="A P2P decentralized exchange built on Elrond" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Roadmap />
      </main>
      <Footer />
    </div>
  )
}

export default RoadmapPage
