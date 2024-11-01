const About = () => {
  return (
    <div className="about">
      <span className="about__title">// Strategie</span>
      <div className="about-container">
        <div className="about-item">
          <h2 className="about-item__title">Interactie.</h2>
          <p className="about-item__text">
            Als freelance creative developer geloof ik dat een geweldige
            gebruikerservaring begint bij doordachte interactie en dynamische
            animaties. Ik zet me in om het navigeren op jouw website niet alleen
            soepel, maar ook gedenkwaardig te maken. Dankzij mijn aandacht voor
            detail en gebruiksvriendelijkheid wordt elke klik een positieve
            beleving.
          </p>
        </div>

        <div className="about-item">
          <h2 className="about-item__title">Prestatie.</h2>
          <p className="about-item__text">
            In de digitale wereld is snelheid cruciaal. Daarom besteed ik veel
            tijd aan het optimaliseren van prestaties door gebruik te maken van
            de beste tools en technieken. Zo zorg ik ervoor dat jouw website
            snel, efficiënt en betrouwbaar functioneert – essentieel voor een
            sterke online aanwezigheid.
          </p>
        </div>

        <div className="about-item">
          <h2 className="about-item__title">Teamwork.</h2>
          <p className="about-item__text">
            Jouw visie staat centraal in mijn werk. Bij het bouwen van jouw
            website luister ik aandachtig naar jouw ideeën en wensen. Ik
            combineer jouw visie met mijn technische expertise om een op maat
            gemaakt resultaat te leveren dat aan jouw verwachtingen voldoet. We
            werken nauw samen om jouw project te laten slagen.
          </p>
        </div>
      </div>
      <div className="about-item">
        <p className="about-item__text">
          Voor kleine tot grote projecten maak ik gebruik van{" "}
          <span>Vanilla Javascript</span> zonder frameworks zodat ik complete
          vrijheid heb in het opbouwen van jouw project. Voor content management
          gebruik ik <span>Prisma</span> in combinatie met{" "}
          <span>PostgreSQL</span>. Animaties doen we met <span>GSAP</span> en/of{" "}
          <span>Framer Motion</span> en voor <span>WebGL</span> gebruik ik{" "}
          <span>Three.js</span>. Voor grotere projecten gebruik ik{" "}
          <span>Next.js</span>.
        </p>
      </div>
    </div>
  );
};

export default About;
