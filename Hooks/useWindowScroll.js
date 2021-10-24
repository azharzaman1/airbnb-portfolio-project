import { useEffect, useState } from "react";

const useWindowScroll = (offset) => {
  console.log(offset);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > parseInt(offset)) {
        setIsScrolled(true);
      } else setIsScrolled(false);

      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, [isScrolled]);

  return isScrolled;
};

export default useWindowScroll;
