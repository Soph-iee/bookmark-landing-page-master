import Features from "./features";
import Herosection from "./hero-section";
import Accordion from "./accordion";
import "./index.css";
import "./mobile.css";
import Form from "./cta-section";
import Footer from "./footer";
import MobileNavbar from "./mobileNav";
import DesktopNavbar from "./desktopNav";

function App() {
  return (
    <>
      <MobileNavbar />
      <DesktopNavbar />
      <div className="container">
        <Herosection />
        <Features />
        <Accordion />
      </div>
      <Form />
      <Footer />
    </>
  );
}

export default App;
