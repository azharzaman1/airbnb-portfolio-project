const Section = ({ headline, children }) => {
  return (
    <section>
      <h2 className="primary-heading mt-7 mb-5">{headline}</h2>
      {children}
    </section>
  );
};

export default Section;
