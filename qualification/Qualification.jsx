import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button ${
              toggleState === 1 ? "qualification__active" : ""
            } button--flex`}
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Educations
          </div>

          <div
            className={`qualification__button ${
              toggleState === 2 ? "qualification__active" : ""
            } button--flex`}
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experiences
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={`qualification__content ${
              toggleState === 1 ? "qualification__content-active" : ""
            }`}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech</h3>
                <span className="qualification__subtitle">
                  GITA Autonomous College - Bhubaneswar
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2020 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Higher Secondary School
                </h3>
                <span className="qualification__subtitle">
                  Jawahar Navodaya Vidyalaya - Angul
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2018 - 2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Primary School</h3>
                <span className="qualification__subtitle">
                  Jawahar Navodaya Vidyalaya - Angul
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2016 - 2018
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={`qualification__content ${
              toggleState === 2 ? "qualification__content-active" : ""
            }`}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Blogger</h3>
                <span className="qualification__subtitle">
                  <a href="https://www.physiohealths.com/?m=1.com">
                    Physio Healths
                  </a>{" "}
                  - Odisha{" "}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2023 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Content writer</h3>
                <span className="qualification__subtitle">
                  Inkshed - Hyderabad
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Customer Representative Executive
                </h3>
                <span className="qualification__subtitle">
                  The Affordable Organic Store - Telengana
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
