
import dottedline from "../public/images/bg-dots.svg";
import { Extensions } from "./data/extensions";
import { useState } from "react";
import { FeaturesDetails } from "./data/features";
function Features() {
  
  const [details, setDetails] = useState(FeaturesDetails[0]);
  const [active, setActive] = useState(1);

  function DisplayFeature(id) {
    const content = FeaturesDetails.find((content) => content.id === id);
    setDetails(content);
  }
  function ActiveButton(id) {
    id !== active ? setActive(id) : setActive(active);
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
          {FeaturesDetails.map((detail) => {
            return (
              <div key={detail.id}>
                <li
                  className={active === detail.id ? "active" : "inactive"}
                  onClick={() => {
                    DisplayFeature(detail.id);
                    ActiveButton(detail.id);
                  }}
                >
                  {detail.title}
                </li>
                <hr />
              </div>
            );
          })}
        </ul>
        <div className="features-detail">
          {/* <div className="image-bg">imagebg</div> */}
          <img src={details.img} alt="feature-illustration" />
          <div className="detail-content">
            <h2>{details.header}</h2>
            <p>{details.content}</p>
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

function ExtensionSection({ name, logo, version }) {
  return (
    <div className="extension-card" id={name}>
      <img src={logo} alt="logo" />
      <h3> Add to {name}</h3>
      <p>Minimum version {version}</p>
      <img src={dottedline} alt="dotted-line" />
      <button className="btn-1" type="button">
        Add & Install Extension
      </button>
    </div>
  );
}

export default Features;
