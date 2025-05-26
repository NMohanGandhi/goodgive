import React from 'react';
//import './corevalues.css';
import './Corevalues.css';
import Compassion from '../assets/Compassion.png';
import Integrity from '../assets/Integrity.png';
import Sustainability from '../assets/Sustainability.png';


const values = [
  {
    icon: Compassion,
    title: 'Compassion',
    description: 'We work with empathy and kindness to meet the immediate and long-term needs of our neighbors.',
  },
  {
    icon: Integrity,
    title: 'Integrity',
    description: 'We are committed to transparency, accountability, and ethical practices in everything we do.',
  },
  {
    icon: Sustainability,
    title: 'Sustainability',
    description: 'We focus on reducing food waste and finding sustainable solutions to hunger.',
  },
];

const CoreValues = () => {
  return (
    <section className="core-values-section">
      <div className="cv-header">
        <h2>Our core values</h2>
        <p>
          Torquem detraxit hosti et quidem se ipsam causam non fuisse torquem detraxit hosti et quidem<br/>
          se texit, ne ad respondendum reddidisti voluptates omittantur maiorum dolorum fuga.
        </p>
      </div>
      <div className="cv-cards">
        {values.map((value, index) => (
          <div className="cv-card" key={index}>
            <img src={value.icon} alt={value.title} className="cv-icon" />
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
