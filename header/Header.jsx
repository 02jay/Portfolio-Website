import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash !== "") {
      setActiveNav(hash);
    }
  }, []);

  const handleModeToggle = () => {
    setToggle(!toggle);
    // Additional code to handle dark mode and light mode switching
    // You can update CSS classes or apply other changes to reflect the selected mode
  };

  return (
    <header className={`header ${toggle ? "dark-mode" : "light-mode"}`}>
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Jay
        </a>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i>
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li>
            {/* Add more navigation items here */}
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps nav__icon"></i>
        </div>
      </nav>
      <button className="mode-toggle" onClick={handleModeToggle}>
        {toggle ? (
          <i className="uil uil-sun"></i>
        ) : (
          <i className="uil uil-moon"></i>
        )}
      </button>
    </header>
  );
};

export default Header;
