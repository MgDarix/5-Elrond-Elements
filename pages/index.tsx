import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import { Hero } from '../components/Home'
import Footer from '../components/Footer'
import Roadmap from '../components/Roadmap'
import Team from '../components/Team'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>5 Elrond Elements</title>
        <meta name="description" content="A NFT Collection of 5 Elrond Elements" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <Roadmap />
        <Team />
      </main>
      <Footer />
    </div>
  )
}

export default Home
