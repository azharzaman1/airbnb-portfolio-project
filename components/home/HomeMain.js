import { MuiContainer } from "../../files/StyledMui";
import NearbyLocations from "./_HomeMain_NearbyLocations";
import LiveAnywhereSection from "./_HomeMain_LiveAnywhere";
import LargeBanner from "./_HomeMain_LargeCard";

const HomeMain = ({ locationsData, liveAnywhereData }) => {
  return (
    <section className="home-main pb-10">
      <MuiContainer maxWidth="xl">
        {locationsData && <NearbyLocations locationsData={locationsData} />}
        {liveAnywhereData && (
          <LiveAnywhereSection liveAnywhereData={liveAnywhereData} />
        )}

        <LargeBanner
          imgUrl="https://links.papareact.com/4cj"
          title="The Greated Outdoors"
          desc="Earn extra income and open new great opportunities by sharing your space"
          btnText="Start Now"
          className="mt-20"
        />
      </MuiContainer>
    </section>
  );
};

export default HomeMain;
