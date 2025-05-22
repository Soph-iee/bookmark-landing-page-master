import logo from "../public/images/logo-bookmark.svg";
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

export default DesktopNavbar;
