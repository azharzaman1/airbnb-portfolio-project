import Head from "next/head";
import ThemeWrapper from "../files/ThemeWrapper";
import "tailwindcss/tailwind.css";
import "../components/generic/Components.css";
import "../styles/globals.css";
import "../styles/tailwind-extended.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  // The size (height) of the progress bar.
  // Numeric values get converted to px.
  size: 4,

  // Color of the progress bar.
  // Also used for the glow around the bar.
  color: "#fe595e",

  // Class name used for the progress bar element.
  className: "z-10",

  // How many milliseconds to wait before the progress bar
  // animation starts after calling .start().
  delay: 100,
});

Router?.events?.on("routeChangeStart", progress.start);
Router?.events?.on("routeChangeComplete", progress.finish);
Router?.events?.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeWrapper>
        <Component {...pageProps} />
      </ThemeWrapper>
    </>
  );
}

export default MyApp;
