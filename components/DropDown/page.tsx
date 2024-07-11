"use client";
import React, { useState } from "react";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    console.log("clicked");
    const dropdownContainer = document.getElementById("dropdown");
    dropdownContainer?.classList.toggle("hidden");
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="space-y-20">
        {/* Dropdown on click */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="p-5 border rounded-sm select-none"
          >
            Open
          </button>
          <button
            id="dropdown"
            className="absolute w-64 border rounded-sm left-0 top-[70px] hidden"
          >
            Close
          </button>
        </div>
        {/* Dropdown on Open */}
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="relative"
        >
          <button className="p-5 border rounded-sm select-none">About</button>
          {isOpen && (
            <button
              //   onMouseLeave={() => setIsOpen(false)}
              onClick={() => console.log("clicked dropdown")}
              className={`w-64 bg-gray-100 rounded-sm absolute left-0 top-[62px]`}
            >
              Projects
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
