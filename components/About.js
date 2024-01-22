const About = () => {
  return (
    <div className="about">
      <span className="about__title">// Strategie</span>
      <div className="about-container">
        <div className="about-item">
          <h2 className="about-item__title">Interactie.</h2>
          <p className="about-item__text">
            Bij Mik Development geloven we dat een uitmuntende
            gebruikerservaring voortkomt uit doordachte interactie en dynamische
            animatie. Wij zetten ons in om het navigeren op jouw website niet
            alleen soepel, maar ook memorabel te maken. Door onze toewijding aan
            detail en gebruiksvriendelijkheid, transformeren we elke klik in een
            aangename verrassing.
          </p>
        </div>

        <div className="about-item">
          <h2 className="about-item__title">Prestatie.</h2>
          <p className="about-item__text">
            In de digitale wereld is tijd kostbaar. Elke seconde heeft impact.
            Daarom leggen wij bij Mik Development onze focus op geavanceerde
            tools en methoden om het allerbeste uit jouw project te halen. Onze
            benadering garandeert snelle, efficiënte en betrouwbare prestaties,
            essentieel voor het succes van jouw online aanwezigheid.
          </p>
        </div>

        <div className="about-item">
          <h2 className="about-item__title">Teamwork.</h2>
          <p className="about-item__text">
            Jouw visie is onze missie. Bij het bouwen van jouw website luisteren
            we aandachtig naar je behoeften en wensen, waarna we onze expertise
            en inzichten inzetten om je project naar een hoger niveau te tillen.
            Ons team werkt nauw met je samen, waarbij jouw ideeën en onze kennis
            samensmelten tot een op maat gemaakt meesterwerk.
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
