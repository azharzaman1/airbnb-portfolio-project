import { useMediaQuery } from "@mui/material";
import { Card } from "./HomeMain_LiveAnywhere";

const _HomeMain_Blog = ({ blogData }) => {
  const isBelow876Px = useMediaQuery("(max-width: 876px)");

  return (
    <section className="section nearby-locations-section mb-10">
      <div
        className={`flex justify-between space-x-3 md:space-x-5 ${
          isBelow876Px && "overflow-y-hidden overflow-x-scroll"
        }`}
      >
        {blogData.map(({ title, desc, img }) => (
          <Card
            key={img}
            img={img}
            title={title}
            desc={desc}
            noOfItems={4}
            className="mb-16"
          />
        ))}
      </div>
    </section>
  );
};

export default _HomeMain_Blog;
