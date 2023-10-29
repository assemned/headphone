import React, { useState } from "react";
import { RiArrowLeftSLine, RiArrowDownSLine } from "react-icons/ri";
import { faqdata } from "../../data/data";
import "./FAQ.css";

const FAQ = () => {
  const [faqItems, setFaqItems] = useState(
    faqdata.map((item) => ({
      ...item,
      isOpen: false,
    }))
  );

  const toggleItem = (index) => {
    const updatedItems = [...faqItems];
    updatedItems[index].isOpen = !updatedItems[index].isOpen;
    setFaqItems(updatedItems);
  };

  return (
    <div className="faq section-padding-x section-padding-y">
      <h1 className="header">
        Frequently <span className="red">Asked Questions</span>
      </h1>
      <div className="faq-container">
        {faqItems.map((item, index) => (
          <div className="faq-box" key={index}>
            <div
              className="faq-question"
              onClick={() => {
                toggleItem(index);
              }}>
              <p>{item.question}</p>
              {item.isOpen ? (
                <RiArrowDownSLine className="faq-icon" />
              ) : (
                <RiArrowLeftSLine className="faq-icon" />
              )}
            </div>
            {item.isOpen && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
