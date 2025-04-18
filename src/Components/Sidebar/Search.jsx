import React, { useState } from "react";
import { FiSearch, FiCommand } from "react-icons/fi";
import CommandMenu from "./CommandMenu";

function Search() {
  const [open, setOpen] = useState(false);

  const handleInputFocus = () => {
    setOpen(true); // Open the CommandMenu when the input is focused
  };

  const handleInputBlur = (e) => {
    // Delay closing to allow interaction with the CommandMenu
    setTimeout(() => {
      if (!e.currentTarget.contains(document.activeElement)) {
        setOpen(false);
      }
    }, 150);
  };

  return (
    <div onBlur={handleInputBlur}>
      <div className="bg-stone-200 mb-4 relative rounded flex items-center px-2 py-1.5 text-sm">
        <FiSearch className="mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent placeholder:text-stone-400 focus:outline-none"
          onFocus={handleInputFocus} // Open CommandMenu on focus
        />
        <span className="p-1 text-xs flex gap-0.5 items-center shadow bg-stone-50 rounded absolute right-1.5 top-1/2 -translate-y-1/2">
          <FiCommand />K
        </span>
      </div>
      {open && <CommandMenu open={open} setOpen={setOpen} />}
    </div>
  );
}

export default Search;