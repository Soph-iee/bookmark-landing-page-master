import heroImage from "../public/images/illustration-hero.svg";

function Herosection() {
  return (
    <main>
      <section className="hero-section">
        {/* <div className="image-bg">imagebg</div> */}
        <div className="image-container">
          <img
            src={heroImage}
            alt="hero-image"
            width="657"
            height="466"
            className="hero-image"
            
          />
        </div>

        <header className="header">
          <h1>a simple bookmark manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="hero-btns">
            <button className=" btn-1" type="button">
              Get it on Chrome
            </button>
            <button className="btn-2" type="button">
              Get it on Firefox
            </button>
          </div>
        </header>
      </section>
    </main>
  );
}

export default Herosection;
