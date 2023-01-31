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
        <title>Anirudh Soni | Portfolio | Web Developer</title>
      </Head>
      <Home />
      <Navbar />
      <About />
      <Testimonial
        testimonial={"“Opportunities don't happen. You create them.”"}
      />
      <Resume />
      <Testimonial
        testimonial={"“You'll never get bored when you try something new.”"}
      />

      <footer className="w-full text-center h-16 flex items-center justify-center">
        &lt;/&gt; and 🖌️ with ❤ by{"   "}
        <a
          href="https://www.linkedin.com/in/Anirudh-soni-7274261b9/"
          className="text-blue-400"
        >
          Anirudh Soni
        </a>
      </footer>
    </>
  );
}
