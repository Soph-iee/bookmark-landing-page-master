import logo from "../public/images/logo-bookmark.svg";
function DesktopNavbar() {
  return (
    <>
      <nav className="desktop-navbar">
        <img src={logo} alt="bookmark-logo" />
        <ul>
          <li className="nav-btn">
            <a href="/#features"> Features</a>
          </li>
          <li className="nav-btn">
            <a href="/#pricing"> Pricing</a>
          </li>
          <li className="nav-btn">
            <a href="/#contact"> Contact</a>
          </li>
          <li id="login-btn">
            <a href="/#login" id="login-btn">
              {" "}
              Login
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default DesktopNavbar;
