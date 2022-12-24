import Head from "next/head";
import About from "../components/About";
import Home from "../components/Home";
import Navbar from "../components/Navbar";

export default function Index() {
  return (
    <>
      <Head>
        <title>Aniruddh Soni | Portfolio</title>
      </Head>
      <Home />
      <Navbar />
      <About />
    </>
  );
}
