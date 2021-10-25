import { useCallback, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import Image from "next/image";
import { HeartIcon, StarIcon } from "@heroicons/react/solid";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import { getRandomNumber } from "../../files/utils";

const Map = ({ searchResults }) => {
  const [wishlistState, setWishlistState] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const cordinates = searchResults.map(({ lat, long }) => ({
    longitude: long,
    latitude: lat,
  }));

  const noOfReviews = useCallback(() => getRandomNumber(1, 1000));

  const center = getCenter(cordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center?.latitude,
    longitude: center?.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle={process.env.NEXT_PUBLIC_MAP_STYLES}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_TOKEN}
      onViewportChange={(newVP) => {
        if (selectedLocation) {
          false;
        } else {
          setViewport(newVP);
        }
      }}
      {...viewport}
    >
      {searchResults?.map((result) => (
        <div>
          <Marker
            key={result.lat}
            longitude={result.long}
            latitude={result.lat}
          >
            <a
              role="img"
              aria-label="map-pin"
              onClick={() => setSelectedLocation(result)}
              className="bg-white cursor-pointer py-1 px-2 rounded-full font-semibold shadow-xl text-sm hover:text-[16px] transition-text duration-200"
            >
              {result.price.substr(0, result.price.indexOf(" "))}
            </a>
          </Marker>
          {selectedLocation?.long == result.long && (
            <Popup
              latitude={result.lat}
              longitude={result.long}
              closeOnClick={true}
              offsetLeft={20}
              onClose={() => setSelectedLocation(null)}
              className="z-50 shadow-lg min-w-[300px] max-w-[500px] cursor-pointer rounded-full"
            >
              <div className="flex flex-col pb-1">{result.title}</div>
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center text-xs">
                  <StarIcon className="h-4 text-[#FF385C]" />
                  <p>
                    {result.star} ({noOfReviews()} reviews)
                  </p>
                </div>
                <p className="text-xs underline">{result.total}</p>
              </div>
              <div className="relative h-40 w-full">
                <button
                  className="icon-button-variant-2 absolute z-50 right-0 top-0"
                  onClick={() => setWishlistState((prev) => !prev)}
                >
                  {wishlistState ? (
                    <HeartIconSolid className="h-5 sm:h-6 md:h-7 active:scale-95 text-[#fe595ec9]" />
                  ) : (
                    <HeartIcon className="h-5 sm:h-6 md:h-7 active:scale-95 text-gray-100" />
                  )}
                </button>
                <Image src={result.img} layout="fill" />
              </div>
            </Popup>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};
export default Map;
