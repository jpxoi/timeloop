import React from "react";
import { Link } from "react-router-dom";

function ChangePassword() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center m-auto bg-gray-100">
      <div className="w-screen-lg bg-white shadow-md rounded-lg flex flex-col items-center justify-center py-8 px-8 space-y-4">
        <h1 className="text-2xl font-bold">Change Password</h1>

        <form className="flex flex-col items-center justify-center space-y-4 w-[300px]">
          <input
            type="password"
            placeholder="Current Password"
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          <input
            type="password"
            placeholder="New Password"
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white font-semibold rounded-md"
          >
            Change Password
          </button>
        </form>

        <Link to="/app/account" className="text-red-500 hover:underline">
          Cancel Change
        </Link>
      </div>
    </div>
  );
}

export default ChangePassword;
