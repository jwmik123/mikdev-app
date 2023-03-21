import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const ImageFollower = () => {
  const [imagePos, setImagePos] = useState({ x: 0, y: 0 });
  const [hoveredImage, setHoveredImage] = useState(null);
  const [hoveredImageSlug, setHoveredImageSlug] = useState(null);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const imageRef = useRef(null);

  gsap.config({ nullTargetWarn: false });

  useEffect(() => {
    gsap.to(imageRef.current, {
      duration: 0.4,
      left: imagePos.x - 150,
      top: imagePos.y - 112,
      ease: "Power1.out",
    });
  }, [imagePos]);

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
      setHoveredImageSlug(null);
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
        ref={imageRef}
        style={{
          left: imagePos.x - 150,
          top: imagePos.y - 112,
        }}
      >
        <div className="slider">
          <video
            preload={true}
            key={hoveredImage}
            autoPlay={true}
            loop={true}
            muted={true}
          >
            <source src={hoveredImageSlug} type="video/mp4" />
          </video>
        </div>
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
        id="projects"
      >
        <div className="project-section-titles">
          <span className="project-section-title">// Projecten</span>
        </div>

        {projects.data.slice(0, 4).map((project) => (
          <div key={project.id}>
            <a href={`${project.attributes.content}`} className="project-link">
              <div
                className="project-item"
                data-id={project.attributes.coverVideo.data.id}
                data-slug={project.attributes.coverVideo.data.attributes.url}
              >
                <h3>{project.attributes.title}</h3>
                <span className="span--desktop">{project.attributes.slug}</span>
                <span className="span--mobile">I &amp; O</span>
              </div>
            </a>
            <ImageFollower />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
