import { AccordionData } from "./accordiondata";
import openIcon from "../public/images/icon-arrow.svg";
import closeIcon from "../public/images/icon-close.svg";
import { useState } from "react";

function Accordion() {
  return (
    <section className="accordion-section">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      {AccordionData && AccordionData.length > 0 ? (
        AccordionData.map((faq) => {
          return <FAQ {...faq} key={faq.id} />;
        })
      ) : (
        <p>No data found</p>
      )}
      <button className="btn-1" type="button">
        More Info
      </button>
    </section>
  );

  function FAQ(props) {
    const [open, setOpen] = useState(null);
    function openFaq(currentId) {
      setOpen(currentId === open ? null : currentId);
    }
    const { question, answer, id } = props;
    return (
      <>
        <div className="question-tab">
          <h4
            onClick={() => {
              openFaq(id);
            }}
          >
            {question}
          </h4>
          <span>
            {open === id ? (
              <img
                className="close-icon"
                src={closeIcon}
                alt="open"
                onClick={() => {
                  openFaq(id);
                }}
              />
            ) : (
              <img
                src={openIcon}
                alt="close"
                onClick={() => {
                  openFaq(id);
                }}
              />
            )}
          </span>
        </div>
        <p className="answer"> {open === id && answer}</p>
        <hr />
      </>

      
    );
  }
}
export default Accordion;
