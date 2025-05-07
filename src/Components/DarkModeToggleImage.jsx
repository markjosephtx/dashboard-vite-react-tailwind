import React from "react";
import { useDarkMode } from "../context/ThemeContext";
import lightModeImage from '../assets/light-mode-image.png';
import darkModeImage from '../assets/dark-mode-image.png';

const DarkModeToggleImage = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
      {/* Light Mode Image */}
      <img
        src={lightModeImage}
        alt="Light Mode"
        className={`w-[350px] h-[245px] cursor-pointer ${
          !darkMode ? "opacity-100" : "opacity-100"
        }`}
        onClick={() => setDarkMode(false)}
      />

      {/* Dark Mode Image */}
      <img
        src={darkModeImage}
        alt="Dark Mode"
        className={`w-[350px] h-[245px] cursor-pointer ${
          darkMode ? "opacity-100" : "opacity-100"
        }`}
        onClick={() => setDarkMode(true)}
      />
    </div>
  );
};

export default DarkModeToggleImage;