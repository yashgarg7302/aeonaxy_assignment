import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileLines,
  faCalendarDays,
  faSearch,
  faBars,
  faBolt
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [activeLink, setActiveLink] = useState(""); // State to track active link

  // Function to handle click on a tag and update active link
  const handleClick = (link) => {
    setActiveLink(link);
  };

  // Function to get the icon based on the active link
  const getIcon = (link) => {
    switch (link) {
      case "home":
        return faHome;
      case "courses":
        return faFileLines;
      case "today":
        return faCalendarDays;
      default:
        return null;
    }
  };

  return (
    <nav className="shadow-2xl">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex flex-col sm:flex-row sm:items-center h-16 justify-between">
          <div className="flex items-center sm:justify-start">
            <img className="h-12 w-auto" src={logo} alt="Your Company" />
            <div className="ml-2 text-xl font-bold text-black">BRILLIANT</div>
          </div>
          <div className="hidden sm:flex flex-grow justify-center">
            <div className="flex space-x-4">
              <a
                href="#"
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  activeLink === "home"
                    ? "border-b-2 border-black text-black"
                    : "text-gray-400"
                }`}
                onClick={() => handleClick("home")}
              >
                <FontAwesomeIcon
                  icon={getIcon("home")}
                  className={`mr-2 ${
                    activeLink === "home" ? "text-black" : ""
                  }`}
                />
                HOME
              </a>
              <a
                href="#"
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  activeLink === "courses"
                    ? "border-b-2 border-black text-black"
                    : "text-gray-400"
                }`}
                onClick={() => handleClick("courses")}
              >
                <FontAwesomeIcon
                  icon={getIcon("courses")}
                  className={`mr-2 ${
                    activeLink === "courses" ? "text-black" : ""
                  }`}
                />
                COURSES
              </a>
              <a
                href="#"
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  activeLink === "today"
                    ? "border-b-2 border-black text-black"
                    : "text-gray-400"
                }`}
                onClick={() => handleClick("today")}
              >
                <FontAwesomeIcon
                  icon={getIcon("today")}
                  className={`mr-2 ${
                    activeLink === "today" ? "text-black" : ""
                  }`}
                />
                TODAY
              </a>
            </div>
            <div className="relative ml-4">
              <input
                type="text"
                placeholder=""
                className="px-4 py-2 rounded-md pl-10 bg-gray-200"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
            </div>
          </div>
          <div className="flex items-center mt-2 sm:mt-0 sm:justify-end">
            <button className="bg-transparent hover:text-black hover:bg-green-500 text-green-700 font-semibold hover:text-green py-2 px-6 sm:px-10 border border-green-500 hover:border-transparent rounded ml-4">
              START TRIAL
            </button>
            <div className="ml-4 flex items-center">
              <span className="font-bold text-black text-lg">2</span>
              <FontAwesomeIcon
                icon={faBolt}
                className="ml-2"
                style={{ color: "#FFD700" }}
              />
            </div>
            <FontAwesomeIcon icon={faBars} className="ml-4" size="2x" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
