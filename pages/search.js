import Header from "../components/generic/Header";
import Head from "next/head";
import Footer from "../components/generic/Footer";
import { MuiContainer, MuiContainerNarrowPadded } from "../files/StyledMui";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/search/InfoCard";

const Search = ({ footerLinks, searchResults }) => {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const dateRange = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="search-page">
      <Head>
        <title>Airbnb | Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        placeholder={`${location} | ${dateRange} | ${noOfGuests} guests`}
      />

      <section className="search-main pt-10">
        <MuiContainerNarrowPadded maxWidth="xl">
          <div className="info">
            <p className="text-sm">
              175+ stays - {dateRange} - {noOfGuests} guests
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
          <main className="search-results flex flex-col">
            {searchResults?.map(
              ({ title, img, location, description, star, price, total }) => (
                <InfoCard
                  key={title.toLowerCase().replace(/\s+/g, "")}
                  title={title}
                  img={img}
                  description={description}
                  location={location}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </main>
        </MuiContainerNarrowPadded>
      </section>

      <Footer footerData={footerLinks} />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const footerLinks = await (
    await fetch("https://jsonkeeper.com/b/1VGT")
  ).json();

  const searchResults = await (
    await fetch("https://jsonkeeper.com/b/5NPS")
  ).json();

  return {
    props: {
      searchResults,
      footerLinks,
    },
  };
}
