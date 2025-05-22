import Featureimage1 from "../public/images/illustration-features-tab-1.svg";
import dottedline from "../public/images/bg-dots.svg";
import { Extensions } from "./extensions";
import { useState } from "react";
function Features() {
  const [feature, setFeature] = useState({
    header: "Bookmark in one click",
    content:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  });

  function simpleBookmark() {
    setFeature({
      header: "Bookmark in one click",
      content:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    });
  }

  function EasySharing() {
    setFeature({
      header: "Share your Bookmarks",
      content:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    });
  }
  function SpeedySearch() {
    setFeature({
      header: "Intelligent Search",
      content:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    });
  }
  return (
    <>
      <section id="features" className="features-section">
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
        <ul className="grid">
          <li onClick={simpleBookmark}>simple bookmarking</li> <hr />
          <li onClick={SpeedySearch}>speedy searching</li> <hr />
          <li onClick={EasySharing}>easy sharing</li>
          <hr />
        </ul>
        <div className="features-detail">
          <img src={Featureimage1} alt="feature-illustration" />
          <div className="detail-content">
            <h2>{feature.header}</h2>
            <p>{feature.content}</p>
          </div>
        </div>
      </section>
      <section className="extension-section" id="pricing">
        <h2>Download the extension</h2>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
        <div className="card-parent">
          {Extensions.map((extension) => {
            return <ExtensionSection {...extension} key={extension.id} />;
          })}
        </div>
      </section>
    </>
  );
}

function ExtensionSection(props) {
  const { name, logo, version } = props;
  return (
    <div className="extension-card">
      <img src={logo} alt="logo" />
      <h3> Add to {name}</h3>
      <p>Minimum version {version}</p>
      <img src={dottedline} alt="dotted-line" />
      <button className="btn-1" type="button">
        {" "}
        Add & Install Extension
      </button>
    </div>
  );
}

export default Features;
