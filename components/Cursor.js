import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const coords = { x: 0, y: 0 };

const Cursor = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    document.querySelectorAll("a").forEach((e) => {
      e.addEventListener("mouseover", () => setHovered(true));
      e.addEventListener("mouseout", () => setHovered(false));
    });
  };

  useEffect(() => {
    const circles = document.querySelectorAll(".circle");
    const animateCursor = () => {
      circles.forEach((circle) => {
        circle.x = 0;
        circle.y = 0;
      });
      document.addEventListener("mousemove", (e) => {
        coords.x = e.clientX;
        coords.y = e.clientY;
      });

      const animateCircles = () => {
        let x = coords.x;
        let y = coords.y;

        circles.forEach((circle, index) => {
          circle.style.left = x - 13 + "px";
          circle.style.top = y - 13 + "px";
          circle.style.scale = (circles.length - index) / circles.length;
          circle.x = x;
          circle.y = y;

          const nextCircle = circles[index + 1] || circles[0];
          x += (nextCircle.x - x) * 0.4;
          y += (nextCircle.y - y) * 0.4;
        });

        requestAnimationFrame(animateCircles);
      };
      animateCircles();
    };
    animateCursor();
    handleHover();
  });

  return (
    <>
      {/* {hovered ? (
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 2 }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
          className="circle"
        ></motion.div>
      ) : (
        <motion.div
          initial={{ scale: 2 }}
          animate={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
          className="circle"
        ></motion.div>
      )} */}
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </>
  );
};

export default Cursor;
