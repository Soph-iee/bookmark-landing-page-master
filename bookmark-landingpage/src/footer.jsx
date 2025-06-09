import logo from "../public/images/logo-footerbookmark.svg";
import facebookIcon from "../public/images/icon-facebook.svg";
import twitterIcon from "../public/images/icon-twitter.svg";

function Footer() {
  return (
    <footer className="footer-parent">
      <div className="footer">
        <div className="desktop-footer">
          <header>
            <img src={logo} className="footer-logo" />
          </header>
          <nav>
            <ul>
              <li>
                <a href="/#features"> Features</a>
              </li>
              <li>
                <a href="/#pricing"> Pricing</a>
              </li>
              <li>
                <a href="/#contact"> Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <section>
          <ul className="socials">
            <li>
              <img src={facebookIcon} alt="facebookIcon" />
            </li>
            <li>
              <img src={twitterIcon} alt="twitterIcon" />
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
