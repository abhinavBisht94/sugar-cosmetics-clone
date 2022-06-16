import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTumblr,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsPhone } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="app__footer">
      <div className="footer__social-logo">
        <img
          src="https://in.sugarcosmetics.com/Footer_sugar_icon.png"
          alt=""
          width={"125px"}
        />
        <div className="footer__icons">
          <FaFacebookF className="icons" />
          <FiMail className="icons" />
          <FaInstagram className="icons" />
          <FaPinterest className="icons" />
          <FaTumblr className="icons" />
          <FaYoutube className="icons" />
          <FaTwitter className="icons" />
        </div>
      </div>

      <div className="footer__second-line">
        <div className="footer__newsletter">
          <p className="footer__newsletter-title">
            subscribe to our newsletter
          </p>

          <div className="footer__input">
            <input type="text" placeholder="Your email address" />
            <button>sign up</button>
          </div>
        </div>
        <div className="footer__apps">
          <p>get the new sugar app today</p>
          <div className="footer__apps-info">
            <p>Tap into a better shopping experience</p>
            <div className="footer-apps-img">
              <img
                src="https://in.sugarcosmetics.com/playstore.png"
                alt=""
                width={"100px"}
                height={"35px"}
              />
              <img
                src="https://in.sugarcosmetics.com/apple-store.png"
                alt=""
                width={"100px"}
                height={"35px"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="footer__information">
        <p>information</p>
        <div className="footer__information-details">
          <p>Stores</p>
          <p>Terms & Conditions</p>
          <p>Returns</p>
          <p>FAQs</p>
          <p>About Us</p>
        </div>
      </div>

      <div className="footer__information">
        <p>Get in touch</p>
        <div className="footer__information-details">
          <div>
            <p className="title">
              <BsPhone /> Call us at
            </p>
            <p>1800-209-9933</p>
            <p>Monday to Friday : 9 AM to 7 PM</p>
          </div>
          <div>
            <p className="title">Support</p>
            <p>hello@sugarcosmatics.com</p>
          </div>
          <div>
            <p className="title">Careers</p>
            <p>We're hiring!</p>
          </div>
          <div>
            <p className="title">PRESS & MEDIA</p>
            <p>pr@sugarcosmatics.com</p>
          </div>
          <div>
            <p className="title">INFLUENCER COLLAB</p>
            <p>JOIN US</p>
          </div>
        </div>
      </div>

      <hr />

      <p className="copyright">
        Copyright © 2022 SUGAR Cosmetics. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
