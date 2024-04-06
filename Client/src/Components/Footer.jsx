import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h6>About</h6>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus quibusdam consequatur minima dolorum, eligendi, minus
                impedit eaque quam neque id quod aut. Porro adipisci, ad quia
                eligendi non provident veritatis!
              </p>
            </div>

            <div className="col_1">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Westernwear">Westernwear</Link>
                </li>
                <li>
                  <Link to="/Indian">Indianwear</Link>
                </li>
                <li>
                  <Link to="/Footwear">Footwear</Link>
                </li>
                <li>
                  <Link to="/Watches">Watches</Link>
                </li>
              </ul>
            </div>

            <div className="col_2">
              <h6>Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="http://scanfcode.com/about/">About Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contact/">Contact Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contribute-at-scanfcode/">
                    Contribute
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/privacy-policy/">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/sitemap/">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col_4">
              <p className="copyright-text">
                Copyright &copy; 2017 All Rights Reserved
              </p>
            </div>

            <div className="col_5">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <CiFacebook />
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <FaWhatsapp />
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <CiLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
