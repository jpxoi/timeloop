import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserData } from "../../Helpers/Auth";

function Profile() {
  const AvatarURL = localStorage.getItem("avatar_url");
  const FirstNameSpan = localStorage.getItem("first_name");
  const LastNameSpan = localStorage.getItem("last_name");
  const FullName = `${FirstNameSpan} ${LastNameSpan}`;
  const UsernameSpan = localStorage.getItem("username");

  // Get a list of friends from local storage, checking for items that start with "friend_"
  const friends = Object.keys(localStorage)
    .filter((key) => key.startsWith("friend_"))
    .map((key) => localStorage.getItem(key));

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center m-auto bg-slate-200">
      <div className="max-w-screen-lg bg-white shadow-md rounded-lg flex flex-col items-center justify-center">
        <div className="w-full">
          <div className="h-60 w-[1000px] bg-blue-500 rounded-t-lg">
            <img
              src="https://images.unsplash.com/photo-1614850715649-1d0106293bd1?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cover"
              className="w-full h-60 rounded-t-lg"
            />
          </div>
          <div className="w-40 h-40 bg-white rounded-full absolute -mt-20 ml-4">
            <img
              className="w-40 h-40 p-1 rounded-full"
              src={AvatarURL}
              alt="Bordered avatar"
            />
          </div>

          <div
            id="buttons"
            className="flex flex-row space-x-4 items-center justify-center absolute mt-5 ml-[700px]"
          >
            <Link to="/app/change-avatar">
              <button className="border border-blue-700 text-blue-500 font-semibold rounded-lg px-4 py-2 hover:bg-blue-500 hover:text-white">
                Change Avatar
              </button>
            </Link>

            <Link to="/app/account">
              <button className="border border-blue-700 text-blue-500 font-semibold rounded-lg px-4 py-2 hover:bg-blue-500 hover:text-white">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col items-left justify-center space-y-1 pt-20 mt-1 px-4 pb-8">
          <h2 className="text-2xl font-bold leading-none flex flex-row">
            {FullName} <CheckBadgeIcon className="w-6 h-6 fill-blue-500 ml-2" />
          </h2>
          <h3 className="text-sm text-gray-500 font-normal leading-none">
            @{UsernameSpan}
          </h3>
        </div>

        <div className="w-full flex flex-col items-left justify-center space-y-1 pt-2 mt-1 px-4 pb-8">
          <h2 className="text-xl font-bold leading-none flex flex-row">
            Friends
          </h2>
          <h3 className="text-sm text-gray-500 font-normal leading-none">
            {friends.length > 0 ? friends.length : "No "} friends{" "}
            {friends.length > 0 ? "" : "yet"}
          </h3>

          {friends.map((friend) => (
            <div
              key={friend}
              className="flex flex-row items-center justify-start space-x-2"
            >
              <name className="text-sm font-semibold leading-none">
                User {friend}
              </name>
              <img
                src={`https://api.dicebear.com/8.x/pixel-art/svg?seed=${friend}`}
                alt="Friend avatar"
                className="w-6 h-6 rounded-full"
              />
              <button
                className="text-red-500 hover:underline"
                onClick={() => {
                  localStorage.removeItem(`friend_${friend}`);
                  window.location.reload();
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <h3 className="text-sm text-gray-500 font-normal leading-none">
            Add friends to see their events
          </h3>

          <Link to="/app/friends" className="text-blue-500 hover:underline">
            Add Friends
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
