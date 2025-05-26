import React from "react";
import "./FooterGoodgive.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import companylogo from "../assets/companylogo.png";
import footerImage from "../assets/Footer Image@2x.png";

export default function FooterGoodgive() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">

        {/* Logo on line 1 */}
        <div className="footer-logo-line">
          <img src={companylogo} alt="Goodgive Logo" className="footer-logo" />
        </div>

        {/* Name on line 2 */}
        <div className="footer-name-line">
          <span className="footer-name">Goodgive</span>
        </div>

        {/* Main content starts from line 3 */}
        <div className="footer-main">
          <div className="footer-left">
            <h2 className="footer-title">Together, We Can End Hunger</h2>
            <p className="footer-subtitle"><strong>Thank you for visiting Good-give.com</strong></p>
            <p className="footer-description">
              Your support—whether it’s through donating food, time, or funds—makes a real impact on the lives of those who need it most.
              Join us today and be part of the movement to end hunger in our community. Every donation, no matter how small,
              brings us closer to a world where no one goes hungry.
            </p>

            <div className="footer-buttons">
              <button className="btn donate-btn">Donate Now</button>
              <button className="btn signup-btn">Signup to Volunteer</button>
            </div>
          </div>

          <div className="footer-right">
            <h3 className="contact-title">Contact Us</h3>
            <p className="contact-text">
              We’d love to hear from you! Whether you have questions, want to donate, or are interested in volunteering, don’t hesitate to get in touch.
            </p>
            <p className="contact-info"><strong>Phone:</strong> +91-7679791280</p>
            <p className="contact-info"><strong>Email:</strong> donate@goodgive.com</p>
            <p className="contact-info"><strong>Address:</strong> YMCA, Chennai-600091</p>

            <div className="social-section">
              <p className="social-label">Follow Us:</p>
              <div className="social-icons">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaXTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img src={footerImage} alt="Footer Illustration" className="footer-bg-image" />
    </footer>
  );
}
