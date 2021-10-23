import { Grid } from "@mui/material";
import { MuiContainer } from "../../files/StyledMui";

const Footer = ({ footerData }) => {
  return (
    <section className="app-footer bg-[#F7F7F7] pt-12 pb-6">
      <MuiContainer maxWidth="xl">
        <Grid container justifyContent="space-between">
          {footerData?.map(({ title, links }) => (
            <FooterSection
              key={title.toLowerCase().replace(/\s+/g, "")}
              title={title}
              links={links}
            />
          ))}
        </Grid>
        <Grid container className="mt-6 border-t-2 pt-6">
          <Grid item>
            <Grid container>
              <p className="text">© 2021 Airbnb, Inc.</p>
              <span className="px-2">·</span>
              <p className="text">Privacy</p>
              <span className="px-2">·</span>
              <p className="text">Terms</p>
              <span className="px-2">·</span>
              <p className="text">Sitemap</p>
            </Grid>
          </Grid>
        </Grid>
      </MuiContainer>
    </section>
  );
};

const FooterSection = ({ title, links }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <p className="text-semibold mb-2 mt-4 sm:mt-0">{title}</p>
      {links.map(({ label }) => (
        <a
          key={label.toLowerCase().replace(/\s+/g, "")}
          className="link block py-2"
          href={`https://www.airbnb.com/${label
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
        >
          {label}
        </a>
      ))}
    </Grid>
  );
};

export default Footer;
