import React from "react";
import { Link } from "react-router-dom";
import Brand from "../brands/Brand";
// import Categories from "../Categories/Categories";
import Contact from "../ConatctUs/Contact";
import NewProducts from "../NewProducts/NewProducts";
import TopSelling from "../Top Selling/TopSelling";
import About from "./../About/About";
import "./Home.css";
import Slider from "./Slider";
import electronnicsImg from "./HomeImages/electronnicsImg.png";
import tvOffer1 from "./HomeImages/tvOff-1.png";
import tvOffer2 from "./HomeImages/tvOff-2.png";

function Home({ handelCounter }) {
  return (
    <>
      <div className="homePage-Parent">
        {/* <button className="btn btn-up">UP</button> */}
        <div className="home-style">
          <Slider />
        </div>
        <div className="container">
          <Brand />

          <div>
            <img src={electronnicsImg} alt="electronnicsImg" width="100%" />
          </div>

          <p className="title-section">New Products </p>
          <div className="title-new-products">
            <Link to="/categories">
              See all <i class="fas fa-angle-double-right"></i>
            </Link>
          </div>
          <NewProducts />

          <p className="title-section">Top Selling Items</p>
          <div className="title-top-selling">
            <Link to="/categories">
              See all <i class="fas fa-angle-double-right"></i>
            </Link>
          </div>
          <TopSelling />

          {/* <p className="title-section">Top Selling Items</p> */}
          <div className="title-telvesion-off">
            <p>TELEVISIONS HOT DEALS!</p>
          </div>
          <div className="telvesion-off">
            <div>
              <img src={tvOffer1} alt="tvOff-2" />
            </div>
            <div>
              <img src={tvOffer2} alt="tvOff-1" />
            </div>
          </div>

          <p className="title-section">About Us</p>
          <About />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Home;
