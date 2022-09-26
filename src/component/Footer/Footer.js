import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
function Footer() {
  return (
    <>
      <ScrollToTop smooth top="450"/>
      <footer className="bg-dark footer-sec">
        <div className="container text-white footer-content ">
          <div className="footer-about col-lg-5 col-md-6 col-sm-12">
            <h3 className="footer-logo">logo</h3>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Aliquid cupiditate error blanditiis
              Labore doloremque libero uos debitis in temporibus quos nulla,
              fugiat eveniet quae ab corrupti iusto! Eos.
            </p>
            <h3 className="footer-social-title">Join us on</h3>
            <div className="footer-social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-whatsapp"></i>
              <i className="fab fa-google"></i>
            </div>
          </div>
          <div className="footer-navgation col-lg-2 col-md-6 col-sm-6">
            <h3>Navigation</h3>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/categories">Shopping</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
          <div className="footer-cate footer-contact col-lg-2 col-md-6 col-sm-6">
            <h3 className="footer-cate-logo">Categories</h3>
            <ul>
              <li>
                <Link to="#">Mobiles</Link>
              </li>
              <li>
                <Link to="#">Laptops</Link>
              </li>
              <li>
                <Link to="#">Smart TVs</Link>
              </li>
              <li>
                <Link to="#">Wireless Mouses</Link>
              </li>
              <li>
                <Link to="#">Keyboards</Link>
              </li>
              <li>
                <Link to="#">Smart Watches</Link>
              </li>
              <li>
                <Link to="#">Handfree</Link>
              </li>
              <li>
                <Link to="#">Headphone Gaming</Link>
              </li>
            </ul>
          </div>
          <div className="footer-contact col-lg-3 col-md-6 col-sm-6">
            <h3 className="footer-contact-title">Contact Us</h3>
            <ul>
              <li>
                <Link to="#">
                  <i class="fas fa-map-marker-alt"></i> Shbin Elkom / Menoufia
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-phone-volume"></i> 5486357
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-mobile-alt"></i> 01201101099
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i class="fas fa-envelope"></i> youremail@domain.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container Author">
          <p>
            Copyright ©2022 All rights reserved | Made by
            <Link to="#"> Mahmoud Elsebaey</Link>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
