import { MuiContainer } from "../../files/StyledMui";
import NearbyLocations from "./_homeMain_nearbyLocations";

export const HomeMain = ({ data }) => {
  return (
    <div className="home-main ">
      <MuiContainer maxWidth="xl">
        {data && <NearbyLocations locationsData={data} />}
      </MuiContainer>
    </div>
  );
};
