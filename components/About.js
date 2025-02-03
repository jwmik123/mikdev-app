const About = () => {
  return (
    <div className="about">
      <span className="about__title">// Strategy</span>
      <div className="about-container">
        <div className="about-item">
          <h2 className="about-item__title">Interaction.</h2>
          <p className="about-item__text">
            As a freelance creative developer, I believe that a great user
            experience starts with thoughtful interaction and dynamic
            animations. I strive to make navigating your website not just
            smooth, but memorable. Thanks to my attention to detail and focus on
            usability, every click becomes a positive experience.
          </p>
        </div>

        <div className="about-item">
          <h2 className="about-item__title">Performance.</h2>
          <p className="about-item__text">
            In the digital world, speed is crucial. That's why I dedicate
            significant time to optimizing performance by using the best tools
            and techniques. This ensures your website operates quickly,
            efficiently, and reliably – essential for a strong online presence.
          </p>
        </div>

        <div className="about-item">
          <h2 className="about-item__title">Teamwork.</h2>
          <p className="about-item__text">
            Your vision is central to my work. When building your website, I
            listen carefully to your ideas and wishes. I combine your vision
            with my technical expertise to deliver a customized result that
            meets your expectations. We work closely together to make your
            project succeed.
          </p>
        </div>
      </div>
      <div className="about-item">
        <p className="about-item__text">
          For projects both small and large, I use{" "}
          <span>Vanilla Javascript</span> without frameworks to maintain
          complete freedom in building your project. For content management, I
          use <span>Prisma</span> combined with <span>PostgreSQL</span>.
          Animations are created with <span>GSAP</span> and/or{" "}
          <span>Framer Motion</span>, and for <span>WebGL</span>, I use{" "}
          <span>Three.js</span>. For larger projects, I use <span>Next.js</span>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
