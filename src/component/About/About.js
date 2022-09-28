import React from "react";
import OurTeam from "../OurTeam/OurTeam";
import "./About.css";
import aboutImg1 from "./AboutImages/Combo-offer.gif";
import aboutImg2 from "./AboutImages/Ambassador-pana.png";

function About() {
  return (
    <>
      <div className="container about-sec ">
        <div className="about-img col-lg-4 col-md-6 col-sm-12">
          <img src={aboutImg1} alt="combo offer" />
        </div>
        <div className="about-website col-lg-7 col-md-6 col-sm-12">
          <h3>Our Website</h3>
          <p>
            Our electronics website is considered one of the most important
            websites on the Internet in the Middle East, because our website
            always offers the best and newest electronic products before any
            other website in the Middle East.
          </p>
          <p>
            Our website is also characterized by a variety of products and
            prices suitable for all people, as well as we have all brands,
            colors and types
          </p>
        </div>
        <div className="about-howUse col-lg-7 col-md-6 col-sm-12">
          <h3>How to use the website</h3>
          <ul>
            <li>
              <span>1</span> Sign in
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <span>2</span> add your bank account
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <span>3</span> send payment requst
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
          </ul>
          <button>Learn More</button>
        </div>
        <div className="about-img col-lg-4 col-md-6 col-sm-12">
          <img src={aboutImg2} alt="Ambassador-pana" />
        </div>
        <div className="ourTeam col-12">
          <p className="title-section">Our Team</p>
          <OurTeam />
        </div>
      </div>
    </>
  );
}

export default About;
