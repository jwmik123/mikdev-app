import Marquee from "react-fast-marquee";
const Footer = () => {
  return (
    <>
      <Marquee
        className="marquee"
        gradient="false"
        gradientColor="orange"
        speed="120"
      >
        <span>
          Web design — Interfaces — UI/UX — Branding — Content Management — App
          design — Mobile design —
        </span>
        <span>
          Web design — Interfaces — UI/UX — Branding — Content Management — App
          design — Mobile design —
        </span>
      </Marquee>
      <footer>
        <div className="footer-container">
          <div className="footer-top">
            <h1>Interesse in een samenwerking?</h1>
            <div className="email-container" data-animation="to-top">
              <span
                className="send-email"
                onClick={() => {
                  navigator.clipboard.writeText("joel@mikdevelopment.nl");
                }}
              >
                joel@mikdevelopment.nl
              </span>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="copy">&copy; Mik Development.</span>
            <div>
              <ul>
                <li>
                  <a
                    href="https://instagram.com/mik_development"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/mik-development/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
