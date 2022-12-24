import Head from "next/head";
import About from "../components/About";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Testimonial from "../components/Testimonial";

export default function Index() {
  return (
    <>
      <Head>
        <title>Aniruddh Soni | Portfolio</title>
      </Head>
      <Home />
      <Navbar />
      <About />
      <Testimonial />
      <footer className="w-full text-center h-16">
        &lt;/&gt; and 🖌️ with ❤ by{" "}
        <a href="" className="text-blue-400">
          Aniruddh Soni
        </a>
      </footer>
    </>
  );
}
