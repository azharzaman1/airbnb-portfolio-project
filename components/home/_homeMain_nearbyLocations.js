import { TWText } from "../generic/Components";
import Image from "next/image";
import { Grid, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { ChunkifyArray } from "../../files/utils";

const NearbyLocations = ({ locationsData }) => {
  const [data, setData] = useState(ChunkifyArray(locationsData, 4));
  const isBelow876Px = useMediaQuery("(max-width: 877px)");

  return (
    <section className="section nearby-locations-section">
      <div
        className={`flex-col ${
          isBelow876Px && "overflow-y-hidden overflow-x-scroll"
        }`}
      >
        {data?.map((dataChunk, i) => (
          <div className="flex items-center justify-between mb-4" key={i}>
            {dataChunk?.map(({ img, location, distance }) => (
              <Location
                key={img}
                name={location}
                imgUrl={img}
                distance={distance}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

const Location = ({ name, imgUrl, distance }) => {
  const isBelow876Px = useMediaQuery("(max-width: 877px)");
  const isBelow600Px = useMediaQuery("(max-width: 600px)");
  const isBelow420Px = useMediaQuery("(max-width: 420px)");
  return (
    <div
      className={`locationCard cursor-pointer ${
        isBelow876Px && !isBelow600Px ? "min-w-[43%]" : ""
      } ${isBelow600Px && "min-w-[63%]"}`}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="flex-start"
      >
        <Grid item>
          <Image
            src={imgUrl}
            height={isBelow420Px ? 55 : 63}
            width={isBelow420Px ? 55 : 63}
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
    </div>
  );
};

export default NearbyLocations;
