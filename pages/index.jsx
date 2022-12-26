import Head from "next/head";
import { useEffect, useState } from "react";
import About from "../components/About";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Resume from "../components/Resume";
import Testimonial from "../components/Testimonial";

export default function Index() {
  useEffect(() => {
    document.querySelector(".loaderParent").classList.add("hidden");
  }, []);
  return (
    <>
      <div className="loaderParent z-50 h-screen w-full fixed inset-0 bg-base-100 flex items-center justify-center">
        <span className="loader"></span>
      </div>
      <Head>
        <title>Aniruddh Soni | Portfolio</title>
      </Head>
      <Home />
      <Navbar />
      <About />
      <Testimonial
        testimonial={"“Opportunities don't happen. You create them.”"}
      />
      {/* <Resume /> */}
      <footer className="w-full text-center h-16 flex items-center justify-center">
        &lt;/&gt; and 🖌️ with ❤ by{"   "}
        <a href="" className="text-blue-400">
          Aniruddh Soni
        </a>
      </footer>
    </>
  );
}
