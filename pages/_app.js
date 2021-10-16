import "tailwindcss/tailwind.css";
import "../components/generic/Components.css";
import ThemeWrapper from "../files/ThemeWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeWrapper>
      <Component {...pageProps} />
    </ThemeWrapper>
  );
}

export default MyApp;
