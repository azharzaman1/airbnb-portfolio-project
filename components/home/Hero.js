import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] xl:h-[510px] 2xl:h-[665px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        objectPosition="left bottom"
      />
      <div className="hero-content absolute w-full top-1/3 md:top-1/2 text-center">
        <p className="text-semibold text-sm sm:text-md md:text-lg">
          Not sure where to go? Don't worry
        </p>
        <button className="primary-button mt-6">I'm flexible</button>
      </div>
    </div>
  );
};

export default Hero;
