import Features from "./features";
import Herosection from "./hero-section";
import Accordion from "./accordion";
import "./index.css";
import "./desktop.css";
import Form from "./cta-section";
import Footer from "./footer";

function App() {
  return (
    <>
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
