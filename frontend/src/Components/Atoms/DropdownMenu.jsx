import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";
import {
  ArrowRightEndOnRectangleIcon,
  Cog8ToothIcon,
  UserCircleIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import Avatar from "./Avatar";
import { logout } from "../../Helpers/Auth";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const user_first_name = localStorage.getItem("first_name");
  const username = localStorage.getItem("username");
  const AvatarImg = localStorage.getItem("avatar_url");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const log_out_handler = () => {
    logout();
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    document
      .getElementById("log-out-handler")
      .addEventListener("click", log_out_handler);
  }, []);

  return (
    <div className="flex flex-col rounded-[0.5rem] relative bg-white p-2 border">
      <div
        className="flex items-center justify-between text-[0.9rem] mx-1 cursor-pointer"
        onClick={toggleMenu}
      >
        <div className="flex items-center space-x-5 font-[500]">
          <Avatar Img={AvatarImg} />
          <div className="">
            <div className="flex flex-col justify-start">
              <div className="flex items-center space-x-1">
                <div>Hello, {user_first_name}</div>
                <CheckBadgeIcon className="w-4 h-4 fill-blue-500" />
              </div>
              <div className="text-gray-500 font-light text-[0.8rem]">
                @{username}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center ">
            {isOpen ? (
              <ChevronDownIcon className="h-4 w-4 " />
            ) : (
              <ChevronUpIcon className="h-4 w-4 " />
            )}
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-[800ms] ${
          isOpen ? "max-h-[300px]" : "max-h-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col mt-4 text-[1rem] font-[400]">
          <Link
            className="flex   rounded-[0.5rem] py-2 px-2 hover:bg-gray-100 space-x-2"
            to="/app/profile"
          >
            <UserCircleIcon className="w-5 h-5" />
            <div className="">Profile</div>
          </Link>
          <Link
            className="flex   rounded-[0.5rem] py-2 px-2 hover:bg-gray-100 space-x-2"
            to="/app"
          >
            <CalendarIcon className="w-5 h-5" />
            <div className="">Calendar</div>
          </Link>
          <Link
            className="flex   rounded-[0.5rem] py-2 px-2 hover:bg-gray-100 space-x-2"
            to="/app/account"
          >
            <Cog8ToothIcon className="w-5 h-5" />
            <div className="">Settings</div>
          </Link>
          <div className="border-b border-gray-300 w-full my-2" />
          <li
            id="log-out-handler"
            className="flex   justify-between rounded-[0.5rem] py-2 px-2 hover:bg-gray-100 text-red-600 space-x-2 font-[500] cursor-pointer"
          >
            <div className="cursor-pointer">Log out</div>
            <div>
              <ArrowRightEndOnRectangleIcon className="w-5 h-5" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
