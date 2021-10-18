import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import { TWButton, TWHeading, TWText } from "../generic/Components";

const _HomeMain_LargeCard = ({ imgUrl, title, desc, btnText, className }) => {
  const isBelow876Px = useMediaQuery("max-width: 876px");
  return (
    <div className={`relative large-card h-[63vh] ${className}`}>
      <div
        className={`custom-gradient absolute z-10 h-full ${
          isBelow876Px ? "w-full" : "w-[40%]"
        }`}
      >
        <TWHeading color="#fff">{title}</TWHeading>
        <TWText color="#fff">{desc}</TWText>
        <TWButton>{btnText}</TWButton>
      </div>
      <Image src={imgUrl} layout="fill" className="rounded-xl" />
    </div>
  );
};

export default _HomeMain_LargeCard;
