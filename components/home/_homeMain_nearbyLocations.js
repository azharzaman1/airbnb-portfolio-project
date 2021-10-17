import { TWHeading, TWText } from "../generic/Components";
import Image from "next/image";
import { Grid, useMediaQuery } from "@mui/material";

const NearbyLocations = ({ locationsData }) => {
  console.log(locationsData);
  return (
    <div className="section nearby-locations-section">
      <TWHeading className="mt-4">Explore Nearby</TWHeading>
      <div className="p-1">
        <Grid container spacing={2}>
          {locationsData?.map((location) => (
            <Location
              key={location.img}
              name={location.location}
              imgUrl={location.img}
              distance={location.distance}
            />
          ))}
        </Grid>
      </div>
    </div>
  );
};

const Location = ({ name, imgUrl, distance }) => {
  const isBelow420Px = useMediaQuery("(max-width: 420px)");
  return (
    <Grid item xs={6} sm={4} md={3} className="locationCard cursor-pointer">
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="flex-start"
      >
        <Grid item>
          <Image
            src={imgUrl}
            height={isBelow420Px ? 50 : 63}
            width={isBelow420Px ? 50 : 63}
            className="rounded-lg"
          />
        </Grid>
        <Grid item className="flex flex-col justify-center">
          <TWText className="text-sm sm:text-md lg:text-lg" bold>
            {name}
          </TWText>
          <TWText className="mt-1 text-xs sm:text-sm lg:text-md">
            {distance}
          </TWText>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NearbyLocations;
