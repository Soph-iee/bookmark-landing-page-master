import { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [popup, setPopup] = useState(false);
  const [alert, setAlert] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setAlert(email);
    setPopup(true);
    setEmail(" ");
    setError(validateEmail(email));
  };
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || email.length === 0) {
      return "whoops,Email is required";
    }
    if (!regex.test(email)) {
      return "Invalid email format";
    } else return null;
  };

  return (
    <form id="contact" className="cta-section" onSubmit={handleSubmit}>
      <div className="desktop-cta">
        <p>35,000+ already joined</p>
        <h3>Stay up-to-date with what we’re doing</h3>
        <section className="email-parent ">
          <div className="email-section">
            <input
              type="email"
              placeholder="example@email.com"
              id="email"
              value={email}
              onChange={handleChange}
            />
            <p className="error-msg">{email ? error : ""}</p>
          </div>
          <button type="submit" className="cta-btn">
            contact us
          </button>
        </section>
      </div>
      {popup && (
        <div
          className="pop-up"
          onClick={() => {
            setPopup(false);
          }}
        >
          <p>{alert} just subscribed!</p>
        </div>
      )}
    </form>
  );
}
export default Form;
