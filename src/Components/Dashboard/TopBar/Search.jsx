import React, { useState, useEffect } from "react";
import { FiSearch, FiCommand } from "react-icons/fi";
import CommandMenu from "./CommandMenu";

  
  const Search = () => {
    const [searchOpen, setSearchOpen] = useState(false);
  
    const handleSearchToggle = () => {
      setSearchOpen(!searchOpen);
    };
  
    const handleSearchClose = () => {
      setSearchOpen(false);
    };

    useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.metaKey && event.key === 'k') {
        handleSearchToggle();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleSearchToggle]);
  
    return (
      <div>
        <div className="bg-[#F1F3F6] w-full lg:w-96 mb-4 relative rounded flex items-center px-4 py-2 text-sm">
          <FiSearch className="mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent placeholder:text-stone-400 focus:outline-none"
            onClick={handleSearchToggle} // Open CommandMenu on focus
          />
          <span className="p-1 text-xs flex gap-0.5 items-center shadow bg-stone-50 rounded absolute right-1.5 top-1/2 -translate-y-1/2">
            <FiCommand />K
          </span>
        </div>
        {searchOpen && <CommandMenu open={searchOpen} setOpen={setSearchOpen} />}
      </div>
    );
  };


export default Search;