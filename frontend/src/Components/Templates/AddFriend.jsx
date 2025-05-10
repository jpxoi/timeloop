import React from "react";
import { Link } from "react-router-dom";

function AddFriend() {
  const userID = localStorage.getItem("user_id");

  const handleCopy = () => {
    const copyAlert = document.getElementById("copy-alert");
    navigator.clipboard.writeText(userID);
    copyAlert.classList.remove("hidden");
    setTimeout(() => {
      copyAlert.classList.add("hidden");
    }, 2000);
  };

  const handleAddFriend = (e) => {
    e.preventDefault();
    const addAlert = document.getElementById("add-alert");
    const errorAlert = document.getElementById("error-alert");

    addAlert.classList.add("hidden");
    errorAlert.classList.add("hidden");

    const friendID = e.target[0].value;
    if (friendID.length !== 4) {
      errorAlert.classList.remove("hidden");
      return;
    }

    if (localStorage.getItem(`friend_${friendID}`)) {
      errorAlert.classList.remove("hidden");
      return;
    }

    localStorage.setItem(`friend_${friendID}`, friendID);
    addAlert.classList.remove("hidden");
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center m-auto bg-slate-200">
      <div className="w-lg bg-white shadow-md rounded-lg flex flex-col items-center justify-center py-8 px-8 space-y-4">
        <h1 className="text-2xl font-bold">Want your friends to add you?</h1>
        <p className="text-center text-gray-500 w-[500px]">
          Share your user ID with your friends so they can add you.
        </p>

        <h3 className="text-xl font-bold mt-4">Your User ID</h3>
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="p-2 flex space-x-2 bg-gray-100 rounded-md w-full text-center text-lg">
            <div className="p-2 bg-white rounded-md w-full text-center border border-gray-300">
              {userID[0]}
            </div>
            <div className="p-2 bg-white rounded-md w-full text-center border border-gray-300">
              {userID[1]}
            </div>
            <div className="p-2 bg-white rounded-md w-full text-center border border-gray-300">
              {userID[2]}
            </div>
            <div className="p-2 bg-white rounded-md w-full text-center border border-gray-300">
              {userID[3]}
            </div>
          </div>
          <button
            className="p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-48"
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>
        <div className="text-green-500 text-sm hidden" id="copy-alert">
          User ID copied to clipboard successfully!
        </div>
      </div>

      <div className="w-lg bg-white shadow-md rounded-lg flex flex-col items-center justify-center py-8 px-8 space-y-4 mt-4">
        <h1 className="text-2xl font-bold">Add Friend</h1>

        <form
          className="flex flex-col items-center justify-center space-y-4 w-[500px]"
          onSubmit={handleAddFriend}
        >
          <input
            type="text"
            placeholder="User ID"
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Friend
          </button>

          <Link to="/app/profile" className="text-red-500 hover:underline">
            Cancel
          </Link>
        </form>

        <div className="w-full flex flex-col items-center justify-center space-y-2">
          <p className="text-green-500 text-sm hidden" id="add-alert">
            Friend added successfully!
          </p>
          <p className="text-red-500 text-sm hidden" id="error-alert">
            Friend already added!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AddFriend;
