import headerlogo from "../public/images/logo-bookmark.svg";
import logo from "../public/images/logo-footerbookmark.svg";
import closeIcon from "../public/images/icon-close.svg";
import facebookIcon from "../public/images/icon-facebook.svg";
import twitterIcon from "../public/images/icon-twitter.svg";
import React, { useState } from "react";
import menu from "../public/images/icon-hamburger.svg";

// const useBodyScrollLock = () => {
//   React.useLayoutEffect(() => {
//     const originalStyle = window.getComputedStyle(document.body).overflow;
//     document.body.style.overflow = "hidden";
//     return () => (document.body.style.overflow = originalStyle);
//   }, []);
// };
function MobileNavbar() {
  const [click, setClick] = useState(false);
  // useBodyScrollLock();
  return (
    <>
      <nav className="mobile-navbar">
        <img src={headerlogo} alt="bookmark-logo" />
        {click && (
      
          <div className="menu-modal" >
            <header>
              <img src={logo} alt="bookmark-logo" />
              <span>
                <img
                  src={closeIcon}
                  alt="close-menu"
                  className="close-icon"
                  onClick={() => {
                    setClick(false);
                  }}
                />
              </span>
            </header>
            <ul
              onClick={() => {
                setClick(false);
              }}
            >
              <li>
                <a href="/#features">Features</a>
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
            <footer className="socials">
              <img src={facebookIcon} alt="facebook-logo" />
              <img src={twitterIcon} alt="twitter-icon" />
            </footer>
          </div>
        )}
        <img
          src={menu}
          onClick={() => {
            setClick(!click);
          }}
          alt="hamburger-menu"
          className="menu-icon"
        />
      </nav>
    </>
  );
}
export default MobileNavbar;
