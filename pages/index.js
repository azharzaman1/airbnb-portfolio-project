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
    <div className="relative">
      <Head>
        <title>AirBnb Demo | Azhar Zaman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header transparentEffect />
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
    await fetch("https://jsonkeeper.com/b/4G1G")
  ).json();

  const liveAnywhereData = await (
    await fetch("https://jsonkeeper.com/b/VHHT")
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
