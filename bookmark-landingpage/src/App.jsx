import Features from "./features";
import Herosection from "./hero-section";
import Accordion from "./accordion";
import "../src/styles/index.css";
import "../src/styles/mobile.css";
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

// const useBodyScrollLock = () => {
//   React.useLayoutEffect(() => {
//     const originalStyle = window.getComputedStyle(document.body).overflow;
//     document.body.style.overflow = "hidden";
//     return () => (document.body.style.overflow = originalStyle);
//   }, []);
// };
// const Modal = ({ onClose }) => {
//   useBodyScrollLock();
//   return (
//     <div
//       style={{
//         zIndex: 100,
//         background: "rgba(0,0,0,0.25)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <p
//         style={{ padding: 8, borderRadius: 8, background: "#fff" }}
//         onClick={onClose}
//       >
//         Scroll locked! <br /> Click me to unlock
//       </p>
//     </div>
//   );
// };
// const MyApp = () => {
//   const [modalOpen, setModalOpen] = React.useState(false);
//   return (
//     <div
//       style={{
//         height: "400vh",
//         textAlign: "center",
//         paddingTop: 100,
//         background: "linear-gradient(to bottom, #1fa2ff, #12d8fa, #a6ffcb)",
//       }}
//     >
//       <button onClick={() => setModalOpen(true)}>Open modal</button>
//       {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
//     </div>
//   );
// };
