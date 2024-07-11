"use client";
import React, { useState } from "react";

export default function SideMenu() {
  const [dropdown, setDropDown] = useState(false);

  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center relative">
      <button
        onClick={() => {
          console.log("clicked the open button");
          setDropDown(true);
        }}
        className="p-5 border rounded-sm select-none"
      >
        Open Drawer
      </button>
      {/* Overlay */}
      {dropdown && (
        <div
          className="bg-black fixed inset-0 opacity-50 transition-opacity duration-500"
          onClick={() => setDropDown(false)}
        ></div>
      )}
      {/* Drawer */}
      <div
        className={`fixed left-0 top-0 w-96 h-full bg-rose-100 ${
          dropdown ? "translate-x-0" : "-translate-x-96"
        } duration-300`}
      >
        <ul className="">
          <li>hello</li>
          <li>okay</li>
          <li>good</li>
          <li>nice</li>
          <li>bye</li>
        </ul>
      </div>
    </div>
  );
}
