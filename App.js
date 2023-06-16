import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Scroll from "./components/scroll/Scroll";
import PopupMessage from "./components/PopupMessage/PopupMessage";
function App() {
  const [mode, setMode] = useState("light");

  const handleModeChange = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Display the popup message after 3 seconds
    setTimeout(() => {
      setShowPopup(true);
    }, 3000);
  }, []);

  return (
    <>
      <Header mode={mode} onModeChange={handleModeChange} />
      <main className={`main ${mode}`}>
        <Home mode={mode} />
        <About mode={mode} />
        <Skills mode={mode} />
        <Qualification mode={mode} />
        <Contact mode={mode} />
      </main>
      <Footer mode={mode} />
      <Scroll mode={mode} />
      {showPopup && (
        <PopupMessage
          message="Welcome to my portfolio!"
          duration={5000} // Adjust the duration as needed
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}

export default App;
