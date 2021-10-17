import Head from "next/head";
import Header from "../components/generic/Header";
import Hero from "../components/home/Hero";
import { HomeMain } from "../components/home/HomeMain";

export default function Home({ locationsData }) {
  return (
    <div>
      <Head>
        <title>AirBnB | sonysangha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <HomeMain data={locationsData} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://links.papareact.com/pyp"); // replace with the source of data
  const locationsData = await response.json();

  return {
    props: {
      locationsData,
    },
  };
}
