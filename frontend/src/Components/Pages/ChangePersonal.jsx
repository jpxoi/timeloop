import React from "react";
import { Link } from "react-router-dom";

export default function ChangePersonal() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center m-auto bg-slate-200">
      <h3 className="text-2xl font-bold">
        You are not authorized to view this page.
      </h3>
      <h4 className="text-lg font-bold">
        You might have created this account recently. Please allow up to 7 days
        for your account to be verified.
      </h4>

      <Link to="/app/account" className="text-blue-500 hover:underline">
        Return to Account Settings
      </Link>
    </div>
  );
}
