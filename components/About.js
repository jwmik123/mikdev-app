const About = () => {
  return (
    <div className="about">
      <span className="about__title">// Over MD.</span>
      <div className="about-container">
        <div className="about-item">
          <h2 className="about-item__title">Interactie.</h2>
          <p className="about-item__text">
            Een prettige ervaring voor je gebruikers wordt gecreëerd door
            interactie en animatie. Daarom nemen we bij Mik Development de tijd
            om het navigeren op je website zo smooth en opmerkelijk mogelijk te
            maken.
          </p>
        </div>

        <div className="about-item">
          <h2 className="about-item__title">Prestatie.</h2>
          <p className="about-item__text">
            Elke seconde telt. Daarom besteden wij extra veel aandacht aan de
            tools die we gebruiken om het beste uit jouw project naar boven te
            halen.
          </p>
        </div>

        <div className="about-item">
          <h2 className="about-item__title">Teamwork.</h2>
          <p className="about-item__text">
            Wij bouwen een website door goed naar jouw benodigdheden en wensen
            te luisteren en daar onze mening en expertise aan te verlenen om het
            beste in het project naar boven te halen.
          </p>
        </div>
      </div>
      <div className="about-item">
        <p className="about-item__text">
          Voor kleine tot grote projecten maken wij gebruik van{" "}
          <span>Vanilla Javascript</span> zonder frameworks zodat we complete
          vrijheid hebben in het opbouwen van jouw project. Voor content
          management maken we gebruik van <span>Prisma</span> in combinatie met{" "}
          <span>PostgreSQL</span>. Animaties doen we met <span>GSAP</span> en/of{" "}
          <span>Framer Motion</span> en voor <span>WebGL</span> maken we gebruik
          van <span>Three.js</span>. Voor grotere projecten gebruiken we{" "}
          <span>Next.js</span>.
        </p>
      </div>
    </div>
  );
};

export default About;
