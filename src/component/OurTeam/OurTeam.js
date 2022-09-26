import React from "react";
import PersonCard from "./personCard";
import p1 from "./OurTeamImages/person1.jpg";
import p2 from "./OurTeamImages/person2.jpg";
import p3 from "./OurTeamImages/person3.jpg";
import p4 from "./OurTeamImages/person4.jpg";
import './OurTeam.css'

function OurTeam() {
  return (
    <>
      <div className="ourTeam-persons">
        <PersonCard name="Bob Brown" srcImg={p1} jop="creative leader" />
        <PersonCard name="Nat Reynolds" srcImg={p3} jop="Financial Director" />
        <PersonCard name="Frank Kinney" srcImg={p2} jop="Advertising Manager" />
        <PersonCard name="Mark Dowson" srcImg={p4} jop="sales manager" />
      </div>
    </>
  );
}

export default OurTeam;
