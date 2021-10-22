import Header from "../components/generic/Header";
import Head from "next/head";
import Footer from "../components/generic/Footer";
import { MuiContainer } from "../files/StyledMui";

const Search = ({ footerLinks }) => {
  return (
    <div className="search-page">
      <Head>
        <title>Airbnb | Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section className="search-main pt-10">
        <MuiContainer maxWidth="xl">
          <div className="info">
            <p className="text-semibold text-xs">
              5000+ stays for 5 number of guests in London
            </p>
            <h3 className="primary-heading mb-6">Stays in London</h3>
          </div>
          <div className="filters hidden lg:inline-flex mb-5 space-x-3">
            <button className="filter-button">Cancellation flexibility</button>
            <button className="filter-button">Type of place</button>
            <button className="filter-button">Price</button>
            <button className="filter-button">Rooms and Beds</button>
            <button className="filter-button"> Stay Location</button>
            <button className="filter-button">Other filters</button>
          </div>
        </MuiContainer>
      </section>

      <Footer footerData={footerLinks} />
    </div>
  );
};

export default Search;

export async function getStaticProps() {
  const footerLinks = await (
    await fetch("https://jsonkeeper.com/b/1VGT")
  ).json();

  return {
    props: {
      footerLinks,
    },
  };
}
