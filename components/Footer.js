import { useState } from "react";
import Marquee from "react-fast-marquee";

const Footer = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <Marquee
        className="marquee"
        gradient="false"
        gradientColor="orange"
        speed="120"
      >
        <span>
          Web design — Interfaces — UI/UX — Branding — Content Management —
        </span>
        <span>
          Web design — Interfaces — UI/UX — Branding — Content Management —
        </span>
      </Marquee>
      <footer id="footer">
        <div className="footer-container">
          <div className="footer-top">
            <h1>Interesse in een samenwerking?</h1>
            <div className="email-container" data-animation="to-top">
              {active ? (
                <span className="send-email">email gekopieerd!</span>
              ) : (
                <span
                  className="send-email"
                  onClick={() => {
                    navigator.clipboard.writeText("joel@mikdevelopment.nl");
                    setActive(true);
                  }}
                >
                  joel@mikdevelopment.nl
                  <div className="svg-icon">
                    <svg
                      width="392"
                      height="392"
                      viewBox="0 0 392 392"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M160 229.5C155.2 225.1 158 217.667 160 214.5L347 27.5L258.5 26.5C250.5 24.5 248.833 17.3333 249 14C248.6 6.8 255.167 2.33333 258.5 1H381.5C388.3 3 391 8.5 391.5 11V134C389.1 142.4 382.5 144.167 379.5 144C369.9 144.8 366.167 137.667 365.5 134V46L235 175.5C219.167 191.5 186.8 224.3 184 227.5C181.2 230.7 176.5 233.833 174.5 235C164.9 235.8 160.833 231.667 160 229.5Z"
                        fill="#ff4500"
                      />
                      <path
                        d="M209.5 66.5C207.9 75.7 201.833 78.3333 199 78.5L38 79C30.8 80.2 27.6667 86.1667 27 89V356C27 361.2 33.6667 364.833 37 366H304C310 364.8 313.167 358.5 314 355.5V194C316 185.6 323.833 183.833 327.5 184C334.7 183.6 338.5 190.5 339.5 194V357.5C335.5 381.9 316.167 390.333 307 391.5H35.5C11.1 389.1 2.33333 367.833 1 357.5V87.5C4.6 63.9 25.1667 55 35 53.5H199C208.2 56.3 209.833 63.3333 209.5 66.5Z"
                        fill="#ff4500"
                      />
                      <path
                        d="M160 229.5C155.2 225.1 158 217.667 160 214.5L347 27.5L258.5 26.5C250.5 24.5 248.833 17.3333 249 14C248.6 6.8 255.167 2.33333 258.5 1H381.5C388.3 3 391 8.5 391.5 11V134C389.1 142.4 382.5 144.167 379.5 144C369.9 144.8 366.167 137.667 365.5 134V46L235 175.5C219.167 191.5 186.8 224.3 184 227.5C181.2 230.7 176.5 233.833 174.5 235C164.9 235.8 160.833 231.667 160 229.5Z"
                        stroke="#ff4500"
                      />
                      <path
                        d="M209.5 66.5C207.9 75.7 201.833 78.3333 199 78.5L38 79C30.8 80.2 27.6667 86.1667 27 89V356C27 361.2 33.6667 364.833 37 366H304C310 364.8 313.167 358.5 314 355.5V194C316 185.6 323.833 183.833 327.5 184C334.7 183.6 338.5 190.5 339.5 194V357.5C335.5 381.9 316.167 390.333 307 391.5H35.5C11.1 389.1 2.33333 367.833 1 357.5V87.5C4.6 63.9 25.1667 55 35 53.5H199C208.2 56.3 209.833 63.3333 209.5 66.5Z"
                        stroke="#ff4500"
                      />
                    </svg>
                  </div>
                </span>
              )}
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
