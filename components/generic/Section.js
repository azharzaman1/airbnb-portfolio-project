import { TWHeading } from "./Components";

const Section = ({ headline, children }) => {
  return (
    <section>
      <TWHeading className="mt-10 mb-5">{headline}</TWHeading>
      {children}
    </section>
  );
};

export default Section;
