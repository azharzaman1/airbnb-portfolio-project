import { Grid } from "@mui/material";
import { MuiContainer } from "../../files/StyledMui";
import { TWLink, TWText } from "./Components";

const Footer = ({ footerData }) => {
  console.log(footerData);
  return (
    <section className="app-footer bg-[#F7F7F7] pt-12 pb-6">
      <MuiContainer maxWidth="xl">
        <Grid container justifyContent="space-between">
          {footerData?.map(({ title, links }) => (
            <FooterSection title={title} links={links} />
          ))}
        </Grid>
        <Grid container className="mt-6 border-t-2 pt-6">
          <Grid item>
            <Grid container>
              <TWText>© 2021 Airbnb, Inc.</TWText>
              <span className="px-2">·</span>
              <TWLink>Privacy</TWLink>
              <span className="px-2">·</span>
              <TWLink>Terms</TWLink>
              <span className="px-2">·</span>
              <TWLink>Sitemap</TWLink>
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
      <TWText className="mb-2" semibold>
        {title}
      </TWText>
      {links.map(({ label }) => (
        <TWLink
          className="block py-2"
          href={`https://www.airbnb.com/${label.replace(/\s+/g, "-")}`}
        >
          {label}
        </TWLink>
      ))}
    </Grid>
  );
};

export default Footer;
