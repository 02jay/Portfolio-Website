import React, { useEffect, useState } from "react";
import "./PopupMessage.css";

const PopupMessage = ({ message, duration }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return (
    <>
      {isVisible && (
        <div className="popup-message">
          <p>{message}</p>
        </div>
      )}
    </>
  );
};

export default PopupMessage;
