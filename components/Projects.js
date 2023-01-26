import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import SampleData from "../assets/data/SampleData";

const ImageFollower = ({ slug }) => {
  const [imagePos, setImagePos] = useState({ x: 0, y: 0 });
  const [hoveredImage, setHoveredImage] = useState(null);
  const [hoveredImageSlug, setHoveredImageSlug] = useState(null);
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setImagePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = (e) => {
      const id = e.target.getAttribute("data-id");
      const slug = e.target.getAttribute("data-slug");
      setHoveredImageSlug(slug);
      setHoveredImage(id);
      setIsImageVisible(true);
    };

    const handleMouseLeave = () => {
      setHoveredImage(null);
      setIsImageVisible(false);
    };
    const itemElements = document.querySelectorAll(".project-item");
    itemElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });
    return () => {
      itemElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    isImageVisible && (
      <div
        className="hover-image"
        style={{
          left: imagePos.x - 150,
          top: imagePos.y - 112,
        }}
      >
        <motion.img
          // src={hoveredImage && SampleData[3].mediaUrl}
          src={
            hoveredImage &&
            `https://mik-development.s3.eu-central-1.amazonaws.com/` +
              hoveredImageSlug +
              ".png"
          }
        />
      </div>
    )
  );
};

const Projects = ({ projects }) => {
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
        <div className="project-section-titles">
          <span className="project-section-title">// Projecten</span>
          <button className="project-section-all-projects">
            <Link href="/projects">Bekijk alle projecten &gt;</Link>
          </button>
        </div>

        {projects.data.slice(0, 4).map((project) => (
          <div key={project.id}>
            <Link href={`/projects/${project.id}`} className="project-link">
              <div
                className="project-item"
                data-id={project.id}
                data-slug={project.attributes.slug}
              >
                <h3>{project.attributes.title}</h3>
                <span className="span--desktop">
                  Interactie &amp; Ontwikkeling
                </span>
                <span className="span--mobile">I &amp; O</span>
              </div>
            </Link>
            <ImageFollower id={project.id} slug={project.attributes.slug} />
            {console.log(project.attributes.headerImage)}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
