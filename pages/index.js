import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import About from "../components/About";

import { fetchAPI } from "../lib/api";
import axios from "axios";
import qs from "qs";
import Footer from "../components/Footer";

export default function Home({ projects }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <div className="container">
            <Header />
            <Banner />
            <Projects projects={projects} />
            <About />
          </div>
          <Footer />
        </>
      )}
    </AnimatePresence>
  );
}

Home.getInitialProps = async (ctx) => {
  const query = qs.stringify(
    {
      populate: {
        headerImage: {
          fields: ["name", "url"],
        },
      },
    },
    { encodeValuesOnly: true }
  );
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/projects?${query}`
    );
    const projects = res.data;
    return { projects };
  } catch (error) {
    return { error };
  }
};
