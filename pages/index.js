import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import About from "../components/About";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    // <AnimateSharedLayout type="crossfade">
    <AnimatePresence>
      {loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <div className="container">
          <Header />
          <Banner />
          <Projects />
          <About />
        </div>
      )}
    </AnimatePresence>
    // </AnimateSharedLayout>
  );
}
