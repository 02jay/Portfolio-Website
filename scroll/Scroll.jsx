import React, { useEffect, useState } from "react";
import "./scroll.css";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 560) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <a href="#" className="scrollup" onClick={scrollToTop}>
          <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
      )}
    </>
  );
};

export default Scroll;
