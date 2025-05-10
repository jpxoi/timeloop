import React from "react";
import { login } from "../../Helpers/Auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import LandingHeader from "../Organisms/LandingHeader";

import CloudDeco from "../../assets/illustrations/CloudDeco.svg";
import CloudDecoInvert from "../../assets/illustrations/CloudDecoInvert.svg";

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);

  function handleClick() {
    setIsLoading(true);

    const button = document.getElementById("login-button");
    const errormsg = document.getElementById("error-message");
    const errorbox = document.getElementById("error-box");

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Disable the button
    button.disabled = true;

    login(username.toLowerCase(), password)
      .then((data) => {
        console.log(data);
        navigate("/app", { replace: true });
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

  const loadingMessage = isLoading ? "Loading..." : "Login";

  return (
    <div className="flex flex-col h-screen min-w-max relative">
      <LandingHeader />

      <div className="bg-[#F1FBFF] rounded-xl shadow-xl p-8 grid grid-cols-2 gap-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="col-span-2 self-start py-0">
          <h1 className="font-semibold text-3xl text-center p-2">Log in</h1>
          <h1 className="text-center">
            Or{" "}
            <Link
              to="/Signup"
              className="text-sky-600 hover:text-sky-400 underline"
            >
              create an account
            </Link>{" "}
            if you don&apos;t have one.
          </h1>
        </div>

        <form
          className="flex flex-col col-span-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            id="username"
            type="text"
            placeholder="Username"
            minLength={3}
            maxLength={20}
            className="border border-gray-300 mt-4 rounded-md hover:border-gray-400 focus:border-blue-500"
            required
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            minLength={8}
            className="border border-gray-300 mt-4 rounded-md hover:border-gray-400 focus:border-blue-500"
            required
          />
          <button
            id="login-button"
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 disabled:bg-blue-300 disabled:cursor-not-allowed"
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

      <img src={CloudDeco} className="w-[150px] absolute top-48"></img>
      <img
        src={CloudDecoInvert}
        className="w-[150px] absolute right-0 bottom-48"
      ></img>
    </div>
  );
}

export default Login;
