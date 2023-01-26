const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top">
          <h1>Interesse in een samenwerking?</h1>
          <div className="email-container" data-animation="to-top">
            <a href="mailto:joel@mikdevelopment.nl" className="send-email">
              joel@mikdevelopment.nl
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="copy">&copy; Mik Development.</span>
          <div>
            <ul>
              <li>
                <a
                  href="https://instragram.com/mik_development"
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
  );
};

export default Footer;
