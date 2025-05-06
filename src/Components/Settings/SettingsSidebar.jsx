import React, { useState } from "react";
import { FiUser, FiSliders } from "react-icons/fi";


function SettingsSidebar() {
  const [activeSection, setActiveSection] = useState("profile");

  const menuItems = [
    { id: "account", label: "Account", icon:FiUser },
    { id: "appearance", label: "Appearance", icon:FiSliders },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "account":
        return <div>Profile Settings Content</div>;
      case "appearance":
        return <div>
            <h1>Appearance</h1>
            <p>Customize the appearance of the app. Automatically switch between day and night themes.</p>
            </div>;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className="flex pt-6">
      {/* Sidebar Menu */}
      <div className="w-full p-4">
        <ul className="space-y-2 flex flex-col">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`flex flex-row gap-2 items-center cursor-pointer p-3 rounded ${
                activeSection === item.id
                  ? "bg-neutral-950 text-white font-semibold"
                  : "hover:bg-neutral-100"
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