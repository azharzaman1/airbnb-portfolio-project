import { HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid, StarIcon } from "@heroicons/react/solid";
import { Grid } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { getRandomNumber } from "../../files/utils";

const InfoCard = ({
  title,
  description,
  img,
  star,
  price,
  total,
  location,
  className,
}) => {
  const [wishlistState, setWishlistState] = useState(false);

  return (
    <div
      className={`info-card flex flex-col cursor-pointer md:flex-row space-x-3 border-t border-gray-200 pt-8 mb-8 w-full last:pb-8 last:border-b ${className}`}
    >
      <div className="card-image relative h-72 sm:h-96 md:h-52 w-full md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="card-content flex flex-col w-full pt-3 md:pt-0">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex visible md:hidden items-center text-sm">
              <StarIcon className="h-5 pr-1 text-[#FF385C]" /> {star} (
              {getRandomNumber(1, 1000)} reviews)
            </div>

            <p className="text-sm text-gray-600 mt-2">{location}</p>

            <h3 className="text-heading">{title}</h3>

            <div className="hidden md:inline-flex pt-1 w-12 border-b-2"></div>
          </div>
          <button
            className="icon-button self-start"
            onClick={() => setWishlistState((prev) => !prev)}
          >
            {wishlistState ? (
              <HeartIconSolid className="h-5 sm:h-6 md:h-7 active:scale-95 text-[#fe595ec9]" />
            ) : (
              <HeartIcon className="h-5 sm:h-6 md:h-7 active:scale-95" />
            )}
          </button>
        </div>

        {description && (
          <p className="text-sm mt-2 md:mt-3 text-gray-600">{description}</p>
        )}

        <div className="flex flex-grow items-end justify-between mt-4 md:mt-0">
          {star && (
            <div className="hidden md:flex items-center text-sm">
              <StarIcon className="h-5 text-[#FF385C]" /> {star} (
              {getRandomNumber(1, 1000)} reviews)
            </div>
          )}

          <div>
            {price && <p className="text-semibold">{price}</p>}
            {total && <p className="text underline">{total}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
