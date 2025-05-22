import logo from "../public/images/logo-bookmark.svg";
import { useState } from "react";
import menu from "../public/images/icon-hamburger.svg";

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
export default MobileNavbar;
