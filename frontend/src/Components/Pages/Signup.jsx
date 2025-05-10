import React from "react";
import { Link } from "react-router-dom";
import { login, signup } from "../../Helpers/Auth";
import { useNavigate } from "react-router-dom";

import CloudDeco from "../../assets/illustrations/CloudDeco.svg";
import CloudDecoInvert from "../../assets/illustrations/CloudDecoInvert.svg";

import LandingHeader from "../Organisms/LandingHeader";

function Signup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);

  function handleClick() {
    setIsLoading(true);

    const button = document.getElementById("signup-button");
    const errormsg = document.getElementById("error-message");
    const errorbox = document.getElementById("error-box");

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Disable the button
    button.disabled = true;

    signup(firstName, lastName, email, username.toLowerCase(), password)
      .then((data) => {
        console.log(data);
        login(username, password)
          .then(() => {
            navigate("/app", { replace: true });
          })
          .catch((error) => {
            errormsg.innerText = `Error: ${error.message}`;
            errorbox.classList.remove("hidden");

            // Enable the button
            button.disabled = false;
          });
      })
      .catch((error) => {
        errormsg.innerText = `Error: ${error.message}`;
        errorbox.classList.remove("hidden");

        // Enable the button
        button.disabled = false;
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const loadingMessage = isLoading ? "Loading..." : "Sign Up";

  return (
    <div className="flex flex-col h-screen min-w-max relative">
      <LandingHeader />

      <div className="bg-[#F1FBFF] rounded-xl shadow-xl p-8 grid grid-cols-2 gap-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="col-span-2 self-start py-0">
          <h1 className="font-semibold text-3xl text-center p-2">Sign up</h1>
          <h1 className="text-center">
            Or{" "}
            <Link
              to="/Login"
              className="text-sky-600 hover:text-sky-400 underline"
            >
              log in
            </Link>{" "}
            if you already have an account.
          </h1>
        </div>

        <form
          className="flex flex-col col-span-2 self-start py-0"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-2 gap-5 mt-4">
            <input
              id="first-name"
              type="text"
              placeholder="First Name"
              className="border-gray-300 rounded-md hover:border-gray-400 focus:invalid:border-red-500 focus:valid:border-green-500 valid:border-green-500"
              required
            />
            <input
              id="last-name"
              type="text"
              placeholder="Last Name"
              className="border-gray-300 rounded-md hover:border-gray-400 focus:invalid:border-red-500 focus:valid:border-green-500 valid:border-green-500"
              required
            />
          </div>

          <input
            id="email"
            type="email"
            placeholder="E-mail"
            className="col-span-2 border-gray-300 rounded-md mt-4 hover:border-gray-400 focus:invalid:border-red-500 focus:valid:border-green-500 valid:border-green-500"
            required
          />
          <input
            id="username"
            type="text"
            placeholder="Username"
            minLength={3}
            maxLength={20}
            className="col-span-2 border-gray-300 rounded-md mt-4 hover:border-gray-400 focus:invalid:border-red-500 focus:valid:border-green-500 valid:border-green-500"
            required
          />
          <input
            id="password"
            type="password"
            placeholder="Create Password"
            minLength={8}
            className="col-span-2 border-gray-300 rounded-md mt-4 hover:border-gray-400 focus:invalid:border-red-500 focus:valid:border-green-500 valid:border-green-500"
            required
          />

          <button
            id="signup-button"
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 disabled:bg-blue-300 disabled:cursor-not-allowed"
            required
          >
            {loadingMessage}
          </button>
        </form>
      </div>

      <div
        id="error-box"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-red-100 px-4 py-2 rounded-md hidden"
      >
        <p id="error-message" className="text-center text-red-500"></p>
      </div>

      <img src={CloudDeco} className="w-[150px] absolute bottom-36"></img>
      <img
        src={CloudDecoInvert}
        className="w-[150px] absolute right-0 top-36"
      ></img>
    </div>
  );
}

export default Signup;
