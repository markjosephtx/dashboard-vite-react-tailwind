import React from "react";
import { FiHome, FiUsers, FiPaperclip, FiLink, FiDollarSign  } from "react-icons/fi";

// Define the Route component
function Route({ Icon, selected, title }) {
  return (
    <button
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 cursor-pointer transition-[box-shadow,_background-color,_color] ${
        selected ? "bg-white text-neutral-950 shadow" : "hover:bg-neutral-200 bg-transparent text-neutral-500 shadow-none"
      }`}
    >
      <Icon className={`text-sm ${selected ? "text-neutral-500" : ""}`} />
      <span className={`text-sm font-medium ${selected ? "font-semibold" : ""}`} >{title}</span>
    </button>
  );
}

function RouteSelect() {
  return (
    <div className="space-y-1">
      <Route Icon={FiHome} selected={true} title="Dashboard" />
      <Route Icon={FiUsers} selected={false} title="Team" />
      <Route Icon={FiPaperclip} selected={false} title="Invoice" />
      <Route Icon={FiLink} selected={false} title="Integration" />
      <Route Icon={FiDollarSign} selected={false} title="Finance" />
    </div>
  );
}

export default RouteSelect;