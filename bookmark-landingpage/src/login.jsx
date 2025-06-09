import logo from "../public/images/logo-bookmark.svg";
import Footer from "./footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="container">
      <nav className="desktop-navbar">
        <img src={logo} alt="bookmark-logo" />
        <ul>
          <li id="home-btn">
            <a href="#"> back to home</a>
          </li>
        </ul>
      </nav>
      <form id="login" className="login-section">
        <h2>Login page</h2>
        <label htmlFor=""></label>
        <input type="email" placeholder="example@email.com" id="email" />
        <label htmlFor=""></label>
        <input type="password" placeholder="password" id="password" />
        <button type="submit" className="cta-btn" formAction="/#">
          login
        </button>
      </form>
      <Footer />
    </div>
  );
}
