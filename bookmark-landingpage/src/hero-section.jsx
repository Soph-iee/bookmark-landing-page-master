import logo from "../public/images/logo-bookmark.svg";
import menu from "../public/images/icon-hamburger.svg";
import heroImage from "../public/images/illustration-hero.svg"
import { useState } from "react";

function MobileNavbar() {
  const [click, setClick] = useState(false);
  return (
    <>
      <nav className="mobile-navbar">
        <img src={logo} alt="bookmark-logo" />
        {click && (
          <ul className="menu-modal">
            <li>
              <a href="/#features"> Features</a>
            </li>
            <li>
              <a href="/#pricing"> Pricing</a>
            </li>
            <li>
              <a href="/#contact"> Contact</a>
            </li>
            <li>
              <a href="/#login"> Login</a>
            </li>
          </ul>
        )}
        <img
          src={menu}
          onClick={() => {
            setClick(!click);
          }}
          alt="hamburger-menu"
        />
      </nav>
    </>
  );
}
function DesktopNavbar() {
  return (
    <>
      <nav className="desktop-navbar">
        <img src={logo} alt="bookmark-logo" />
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
          <li>
            <a href="/#login"> Login</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

function Herosection() {
  return (
    <main>
      <MobileNavbar />
      <DesktopNavbar />
      <section className="hero-section">
        <img
          src={heroImage}
          alt="hero-image"
          className="hero-image"
          onClick={() => {}}
        />
        <header className="header">
          <h1>a simple bookmark manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="hero-btns">
            <button className=" btn-1" type="button">
              Get it on Chrome
            </button>
            <button className="btn-2" type="button">
              Get it on Firefox
            </button>
          </div>
        </header>
      </section>
    </main>
  );
}

export default Herosection;
