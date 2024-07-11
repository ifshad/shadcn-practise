import React from "react";

export default function FlipCard() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Flip Card */}
      <div className="bg-transparent rounded-md w-80 h-96 cursor-pointer group perspective">
        {/* Child */}
        <div className="relative w-full h-full transition-1000 group-hover:rotate-y-180 duration-1000 preserve-3d">
          {/* Front Side */}
          <div className="absolute w-full h-full p-10 backface-hidden bg-slate-100">
            <h1>Front side</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
              ratione placeat ipsam culpa perspiciatis, vero nihil tempora
              aperiam pariatur et soluta architecto autem excepturi aut tempore
              possimus quaerat est maxime!
            </p>
            <span>go back</span>
          </div>
          {/* Back Side */}
          <div className="absolute w-full h-full p-10 backface-hidden rotate-y-180 bg-rose-100">
            <h1>Back side</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit vitae voluptatibus voluptate vero recusandae veniam
              nulla, dolorem officiis ad enim ipsa ipsum consectetur,
              temporibus, deserunt perspiciatis nam fugit dignissimos numquam.
            </p>
            <span>go front</span>
          </div>
        </div>
      </div>
    </div>
  );
}
