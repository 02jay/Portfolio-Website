import React from "react";
import Social from "./Social"; // Importing the Social component
import "./home.css"; // Importing the CSS file for home styles
import Data from "./Data"; // Importing the Data component
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          {/* Render the Social component */}
          <Social />

          {/* Empty div for the home image */}
          <div className="home__img"></div>

          {/* Render the Data component */}
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
