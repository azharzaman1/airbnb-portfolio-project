import Head from "next/head";
import Footer from "../components/generic/Footer";
import Header from "../components/generic/Header";
import Hero from "../components/home/Hero";
import HomeMain from "../components/home/HomeMain";

export default function Home({
  locationsData,
  liveAnywhereData,
  blogData,
  footerLinks,
}) {
  return (
    <div>
      <Head>
        <title>Airbnb | sonysangha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <HomeMain
        locationsData={locationsData}
        liveAnywhereData={liveAnywhereData}
        blogData={blogData}
      />
      <Footer footerData={footerLinks} />
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

  const blogData = await (await fetch("https://jsonkeeper.com/b/XQFM")).json();

  const footerLinks = await (
    await fetch("https://jsonkeeper.com/b/1VGT")
  ).json();

  return {
    props: {
      locationsData,
      liveAnywhereData,
      footerLinks,
      blogData,
    },
  };
}
