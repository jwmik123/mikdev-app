import { motion } from "framer-motion";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, height: 0 },
  show: {
    opacity: 1,
    height: "100vh",
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 2,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {/* <LoadingBlock variants={item} title={"01"} id="loading-1" />
        <LoadingBlock variants={item} title={"36"} id="loading-2" />
        <LoadingBlock variants={item} title={"72"} id="loading-3" />
        <LoadingBlock variants={item} title={"99"} id="loading-4" /> */}
        <motion.div
          variants={itemMain}
          className="transition-image"
          layoutId="main-image-1"
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export const LoadingBlock = ({ posX, posY, variants, id, title }) => {
  return (
    <motion.div
      variants={variants}
      className={`loading-block ${id}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw`,
      }}
    >
      {title}
    </motion.div>
  );
};

export default Loader;
