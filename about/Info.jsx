import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="uil uil-award about__icon"></i>
        <h3 className="about__title">Experince</h3>
        <span className="about__subtitle">0-1 Year</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase  about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">5+ Projects</span>
      </div>

      {/* <div className="about__box">
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle"></span>
      </div> */}
    </div>
  );
};

export default Info;
