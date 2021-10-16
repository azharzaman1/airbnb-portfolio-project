import Head from "next/head";
import Header from "../components/generic/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>AirBnB | sonysangha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}
