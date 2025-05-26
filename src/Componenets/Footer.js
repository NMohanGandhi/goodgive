import React from 'react';
import './Footer.css'; // Make sure the CSS file name matches exactly

const Footer = () => {
  return (
    <section className="impact-section">
      <div className="impact-wrapper">
        <div className="impact-content">
          <h2>Our Impact So Far</h2>
          <p>
            We are proud of the work we’ve done and the lives we’ve touched, but we know there is still much to be done.
          </p>

          <div className="impact-stats">
            <div className="impact-box">
              <h3>20000+</h3>
              <p><strong>Meals Served</strong><br />Meals served to individuals and families in need</p>
            </div>
            <div className="impact-box">
              <h3>5000+</h3>
              <p><strong>Food Distributed</strong><br />Packets of non-perishable food distributed</p>
            </div>
            <div className="impact-box">
              <h3>1000+</h3>
              <p><strong>Families Assisted</strong><br />Families supported with regular food distributions</p>
            </div>
            <div className="impact-box">
              <h3>50+</h3>
              <p><strong>Volunteers Engaged</strong><br />Volunteers helping us make a difference</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
