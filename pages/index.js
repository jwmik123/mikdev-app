import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import About from "../components/About";
import Footer from "../components/Footer";

import Marquee from "react-fast-marquee";

import axios from "axios";
import qs from "qs";
import Pricing from "../components/Pricing";

export default function Home({ projects }) {
  const [loading, setLoading] = useState(true);

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
            <Projects id="projects" projects={projects} />
            <About />
            <Marquee
              className="marquee"
              gradient="false"
              gradientColor="orange"
              speed="120"
            >
        <span>
          Web design — Interfaces — UI/UX — Branding — Content Management —
        </span>
        <span>
          Web design — Interfaces — UI/UX — Branding — Content Management —
        </span>
      </Marquee>
            <Pricing />
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
          fields: ["name", "url", "formats"],
        },
        coverVideo: {
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
