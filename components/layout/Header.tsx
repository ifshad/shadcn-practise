'use client'

import Link from "next/link";
import React, { FC } from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const Header: FC = () => {
  return (
    <div className="flex justify-between p-2">
      <div>
        <BreadCrumbs />
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/connect">Connect</Link>
        <Link href="/requests"> Requests</Link>
      </div>
      <div>Buttons</div>
    </div>
  );
};

export default Header;
