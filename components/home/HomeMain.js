import { MuiContainer } from "../../files/StyledMui";
import NearbyLocations from "./_HomeMain_NearbyLocations";
import LiveAnywhere from "./_HomeMain_LiveAnywhere";
import LargeBanner from "./_HomeMain_LargeCard";
import Blog from "./_HomeMain_Blog";
import Section from "../generic/Section";

const HomeMain = ({ locationsData, liveAnywhereData, blogData }) => {
  return (
    <section className="home-main pb-10">
      <MuiContainer maxWidth="xl">
        {locationsData && (
          <Section headline="Explore nearby">
            <NearbyLocations locationsData={locationsData} />
          </Section>
        )}

        {liveAnywhereData && (
          <Section headline="Live anywhere">
            <LiveAnywhere liveAnywhereData={liveAnywhereData} />
          </Section>
        )}

        <LargeBanner
          imgUrl="https://links.papareact.com/4cj"
          title="The Greated Outdoors"
          desc="Earn extra income and open new great opportunities by sharing your space"
          btnText="Start Now"
          className="mt-20"
        />

        {blogData && (
          <Section headline="Discover things to do">
            <Blog blogData={blogData} />
          </Section>
        )}
      </MuiContainer>
    </section>
  );
};

export default HomeMain;
