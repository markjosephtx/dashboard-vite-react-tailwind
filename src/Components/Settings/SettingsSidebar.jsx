import React, { useState } from "react";
import { FiUser, FiSliders } from "react-icons/fi";
import AppearanceSection from "./AppearanceSection";
import AccountSection from "./AccountSection";


function SettingsSidebar() {
  const [activeSection, setActiveSection] = useState("profile");

  const menuItems = [
    { id: "account", label: "Account", icon:FiUser },
    { id: "appearance", label: "Appearance", icon:FiSliders },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "account":
        return <AccountSection />;
      case "appearance":
        return <AppearanceSection />;
    default:
        return <AccountSection />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row pt-6 gap-8">
      {/* Sidebar Menu */}
      <div className="w-[320px] p-4">
        <ul className="space-y-2 flex flex-col">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`flex flex-row gap-2 items-center cursor-pointer py-2 px-3 rounded dark:text-white ${
                activeSection === item.id
                  ? "bg-neutral-200 text-neutral-950 dark:text-white dark:bg-neutral-700 font-semibold"
                  : "hover:bg-neutral-50 dark:hover:bg-neutral-800"
              }`}
              onClick={() => setActiveSection(item.id)}
            >
              <item.icon className="text-lg" /> {/* Render the icon */} 
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="w-full p-4">{renderContent()}</div>
    </div>
  );
}

export default SettingsSidebar;