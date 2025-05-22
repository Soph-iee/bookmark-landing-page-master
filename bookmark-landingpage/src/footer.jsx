import logo from "../public/images/logo-footerbookmark.svg";
import facebookIcon from "../public/images/icon-facebook.svg";
import twitterIcon from "../public/images/icon-twitter.svg";

function Footer() {
  return (
    <footer className="footer">
      <header>
        <img src={logo} className="footer-logo" />
      </header>
      <nav>
        <ul>
          <li>features</li>
          <li>pricing</li>
          <li>contact</li>
        </ul>
      </nav>
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
    </footer>
  );
}

export default Footer;
