import React from "react";
import profilepic from "../images/profilepic.jpg";
export default function Info() {
  return (
    <div className="info">
      <img src={profilepic} alt="profile pic" className="info--profilepic" />
      <h1>Douglas Byfield</h1>
      <h4>Full Stack Developer</h4>
      <p>DouglasB.website</p>
    </div>
  );
}
