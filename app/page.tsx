import Head from 'next/head'
import Hero from './components/Hero'
import Cards from './components/Cards'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pharmaceutical official website</title>
        <meta property="og:title" content="Pharmaceutical official website" key="title" />
      </Head>
      <Hero />
      <Cards />
    </div>
  )
}
