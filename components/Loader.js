import { motion } from "framer-motion";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
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
