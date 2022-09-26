import React from "react";
import "./OurTeam.css";

function PersonCard({ name, srcImg, jop }) {
  return (
    <>
      <div className="card-person col-lg-3 col-md-6 col-sm-12">
        <div className="card-person-img">
          <img src={srcImg} alt={name} />
        </div>
        <div className="card-person-body ">
          <h3>{name}</h3>
          <span>{jop}</span>
          <p>
            Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis
            glavrid from dolor amet iquam lorem bibendum
          </p>
        </div>
        <div className="crad-person-social">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </>
  );
}

export default PersonCard;
