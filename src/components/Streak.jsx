import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

function Streak() {
  return (
    <div className="px-20">
      <div className="ml-4 mt-16 flex items-center">
        {/* Big circle */}
        <div
          className="w-24 h-24 text-2xl flex items-center justify-center border-4 border-yellow-500 rounded-full"
        >
          <span className="font-bold text-black">2</span>
          <FontAwesomeIcon
            icon={faBolt}
            className="ml-2"
            style={{ color: "#FFD700" }}
          />
        </div>

        {/* Text and Two lines */}
        <div className="ml-10">
          <div className="text-3xl font-bold">You're on a 2-day streak!</div>
          <div className="flex text-lg mt-2 text-gray-600">
            <div>2 Longest Streak</div>
            <div className="ml-8">19 Lessons Completed</div>
          </div>
        </div>
        <div className="px-10 ml-20 border-r border-gray-300 h-24 mr-20"></div>
      </div>
     
    </div>
  );
}

export default Streak;