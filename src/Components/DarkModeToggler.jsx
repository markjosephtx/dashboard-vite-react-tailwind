import React from "react";
import { useDarkMode } from "../context/ThemeContext";

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`px-6 py-2 font-medium rounded transition-colors ${
        darkMode
          ? "bg-neutral-800 text-white hover:bg-neutral-700"
          : "bg-neutral-200 text-black hover:bg-neutral-300"
      }`}
    >
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default DarkModeToggler;