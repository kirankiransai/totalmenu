import React, { useState } from "react";
import "./PopupToggle.css"; // Import your CSS file
import { FaCaretDown } from "react-icons/fa";

const PopupToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="popup-toggle" onClick={togglePopup}>
      {/* <button onClick={togglePopup}> */}
      <i class="fa-brands fa-internet-explorer"></i>
      <FaCaretDown className="dropdown-arrow" />
      {/* </button> */}
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <ul>
              <li>Create New Post</li>
              <li>Manage Something</li>
              <li>Do Nothing</li>
              <li>Submit to live</li>
              <li>Another action</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupToggle;
