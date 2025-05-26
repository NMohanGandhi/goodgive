import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./VolunteerPage.css";
import Volunteer from '../assets/Volunteer.png';
import AshaStory from '../assets/AshaStory.png';
import PintoStory from '../assets/PintoStory.png';
import AnandStory from '../assets/AnandStory.png';

const faqs = [
  {
    question: "Omne animal, simul atque haec subtilius velint tradere et rationibus.",
    answer: "",
  },
  {
    question: "Torquatos nostros? quos tu tam egregios viros censes aut officiis.",
    answer: "",
  },
  {
    question: "Si sine causa? quae fuerit causa, mox videro; interea hoc.",
    answer: "",
  },
  {
    question: "Sed ut calere ignem, nivem esse vult, summumque malum et.",
    answer: "At vero eos censes aut quid percipit aut rerum facilis.",
  },
  {
    question: "Epicurus in ea voluptate ponit, quod summum malum dolorem, idque.",
    answer: "",
  },
  {
    question: "Tum dicere exorsus est laborum et voluptatem ut perspiciatis, unde.",
    answer: "",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="faq-item" onClick={onClick}>
    <div className="faq-question">
      <h4>{question}</h4>
      <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
    </div>
    {isOpen && answer && <p className="faq-answer">{answer}</p>}
  </div>
);

export default function VolunteerPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="volunteer-container">
      {/* Banner */}
      <div className="banner">
        <div className="banner-content">
          <div className="avatars">
            <img src={AshaStory} alt="avatar" />
            <img src={PintoStory} alt="avatar" />
            <img src={AnandStory} alt="avatar" />
            <span className="avatar-count">+100</span>
          </div>
          <h2>Becoming a Volunteer of Goodgive</h2>
          <button className="register-btn">Register Now</button>
        </div>
        <img src={Volunteer} alt="volunteer" className="banner-img" />
      </div>

      {/* FAQ */}
      <h3 className="faq-title">Frequently Asked Questions</h3>
      <div className="faq-container">
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === i}
            onClick={() => toggleFAQ(i)}
          />
        ))}
      </div>
      
    </div>
  );
}
