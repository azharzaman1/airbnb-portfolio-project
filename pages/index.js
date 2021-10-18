import Head from "next/head";
import Header from "../components/generic/Header";
import Hero from "../components/home/Hero";
import HomeMain from "../components/home/HomeMain";

export default function Home({ locationsData, liveAnywhereData }) {
  return (
    <div>
      <Head>
        <title>AirBnB | sonysangha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <HomeMain
        locationsData={locationsData}
        liveAnywhereData={liveAnywhereData}
      />
    </div>
  );
}

export async function getStaticProps() {
  const locationsData = await (
    await fetch("https://links.papareact.com/pyp")
  ).json();

  const liveAnywhereData = await (
    await fetch("https://links.papareact.com/zp1")
  ).json();

  return {
    props: {
      locationsData,
      liveAnywhereData,
    },
  };
}
