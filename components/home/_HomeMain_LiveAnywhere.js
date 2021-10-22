import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useWindowSize } from "../../Hooks/useWindowSize";

const _HomeMain_LiveAnywhere = ({ liveAnywhereData }) => {
  const isBelow876Px = useMediaQuery("(max-width: 876px)");

  return (
    <section className="live-anywhere-section">
      <div
        className={`flex justify-between space-x-3 md:space-x-5 ${
          isBelow876Px && "overflow-y-hidden overflow-x-scroll"
        }`}
      >
        {liveAnywhereData?.map(({ img, title }) => (
          <Card
            key={img}
            img={img}
            title={title}
            noOfItems={liveAnywhereData.length + 1}
            className="mb-10"
          />
        ))}
      </div>
    </section>
  );
};

export const Card = ({ img, title, desc, noOfItems, className }) => {
  const size = useWindowSize();
  const isBelow876Px = useMediaQuery("(max-width: 876px)");

  return (
    <div
      className={`cursor-pointer ${className}`}
      style={{
        minWidth: isBelow876Px ? size?.width / 2 : size?.width / noOfItems + 15,
        minHeight: isBelow876Px
          ? size?.width / 2
          : size?.width / noOfItems + 15,
      }}
    >
      <div className="relative h-full w-full">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <p className="text-semibold text-sm sm:text-md lg:text-lg mt-2">
        {title}
      </p>
      {desc && (
        <p className="text text-xs sm:text-sm lg:text-md mt-1">{desc}</p>
      )}
    </div>
  );
};

export default _HomeMain_LiveAnywhere;
