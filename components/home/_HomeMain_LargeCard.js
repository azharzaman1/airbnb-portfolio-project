import { useMediaQuery } from "@mui/material";
import Image from "next/image";

const _HomeMain_LargeCard = ({ imgUrl, title, desc, btnText, className }) => {
  const isBelow876Px = useMediaQuery("(max-width: 876px)");
  const isAbove876Px = useMediaQuery("(min-width: 877px)");

  return (
    <div
      className={`relative h-[63vh] w-full rounded-xl overflow-y-hidden ${
        isAbove876Px && "flex"
      } ${className}`}
    >
      <div
        className={`banner-content h-full ${
          isAbove876Px && "absolute z-10 custom-gradient"
        } flex flex-col items-center justify-center py-12 ${
          isBelow876Px ? "w-full bg-gray-900" : "w-[33%] px-5"
        }`}
      >
        <h2 className="secondary-heading text-white mb-4">{title}</h2>
        <p className="text text-white text-center">{desc}</p>
        <button className="secondary-button mx-auto mt-6">{btnText}</button>
      </div>
      <div className="banner-image-container relative w-full h-full">
        <Image src={imgUrl} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default _HomeMain_LargeCard;
