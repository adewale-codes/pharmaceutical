import Head from "next/head";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Section from "./components/Section";
import Discover from "./components/Discover";
import Connect from "./components/Connect";
import Products from "./components/Products";
import Trust from "./components/Trust";
import Feedback from "./components/Feedback";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pharmaceutical official website</title>
        <meta
          property="og:title"
          content="Pharmaceutical official website"
          key="title"
        />
      </Head>
      <Hero />
      <Cards />
      <Section />
      <Discover />
      <Connect />
      <Products />
      <Trust />
      <Feedback />
    </div>
  );
}
