import { motion } from "framer-motion";
import Link from "next/link";

import SampleData from "../assets/data/SampleData";

const Projects = () => {
  return (
    <motion.div
      transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
      className="transition-image final"
      layoutId="main-image-1"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
        className="scroll"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}
        >
          scroll
        </motion.span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 1.8,
        }}
        className="projects"
      >
        <span className="project-section-title">// Projecten</span>
        {SampleData.map(({ title }, index) => (
          <Link key={index} href="" className="project-link">
            <div className="project-item">
              <h3>{title}</h3>
              <span className="span--desktop">
                Interactie &amp; Ontwikkeling
              </span>
              <span className="span--mobile">I &amp; O</span>
            </div>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
