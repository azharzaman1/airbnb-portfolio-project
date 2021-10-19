import Image from "next/image";
import { TWButton, TWText } from "../generic/Components";

const Hero = () => {
  return (
    <div className="relative h-[250px] sm:h-[300px] lg:h-[380px] xl:h-[450px] 2xl:h-[550px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="hero-content absolute w-full top-1/3 md:top-1/2 text-center">
        <TWText semibold className="text-sm sm:text-md md:text-lg">
          Not sure where to go? Don't worry
        </TWText>
        <TWButton className="mt-6">I'm flexible</TWButton>
      </div>
    </div>
  );
};

export default Hero;
