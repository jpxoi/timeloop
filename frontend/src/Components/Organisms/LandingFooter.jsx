import React from "react";
import { Link } from "react-router-dom";

import Logo from "/src/assets/images/logo.webp";

function LandingFooter() {
  return (
    <div>
      <div className="bg-gray-100 border-t-2 border-t-gray-200 p-10 flex gap-x-12 items-center">
        <img src={Logo} className="w-[75px]"></img>
        <Link to="/app" className="hover:text-sky-500 hover:underline">
          Calendar
        </Link>
        <Link to="/app/account" className="hover:text-sky-500 hover:underline">
          Account
        </Link>
        <Link to="/Signup" className="hover:text-sky-500 hover:underline">
          Sign up
        </Link>
      </div>
      <div className="bg-gray-100 pb-5 relative">
        <p className="text-sm font-light absolute left-[44px] bottom-5">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://icons8.com/icon/85369/people"
          >
            Community
          </a>{" "}
          icon by{" "}
          <a target="_blank" rel="noreferrer" href="https://icons8.com">
            Icons8
          </a>
        </p>
      </div>
    </div>
  );
}

export default LandingFooter;
