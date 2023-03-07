import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 1.2,
        }}
        className="header"
      >
        <div className="header-inner">
          <div className="logo">MD.</div>
          <nav className="nav">
            <li>
              <a href="#projects">Projecten</a>
            </li>
            <li>
              <a href="#strategy">Strategie</a>
            </li>
            {/* <li>
              <a href="/about">Over MD.</a>
            </li> */}
          </nav>
          <div className="contact">
            <a href="#footer">Laten we samenwerken.</a>
          </div>
          <div className="hamburger-menu">
            <span></span>
            <span></span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
