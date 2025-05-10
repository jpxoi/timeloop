import React from "react";
import { Link } from "react-router-dom";
import { updateProfile } from "../../Helpers/Auth";

function ChangeAvatar() {
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitButton = document.getElementById("change-avatar-button");
    submitButton.disabled = true;
    setLoading(true);

    updateProfile(
      localStorage.getItem("user_id"),
      localStorage.getItem("first_name"),
      localStorage.getItem("last_name"),
      localStorage.getItem("email"),
      e.target[0].value
    )
      .then((data) => {
        console.log(data);
        localStorage.setItem("avatar_url", e.target[0].value);
        window.location.replace("/app/profile");
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred. Please try again.");
        submitButton.disabled = false;
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center m-auto bg-gray-100">
      <div className="w-screen-lg bg-white shadow-md rounded-lg flex flex-col items-center justify-center py-8 px-8 space-y-4">
        <h1 className="text-2xl font-bold">Change Avatar</h1>

        <form
          className="flex flex-col items-center justify-center space-y-4 w-[500px]"
          onSubmit={handleSubmit}
        >
          <input
            type="url"
            placeholder="Avatar URL"
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          <button
            type="submit"
            id="change-avatar-button"
            className="w-full p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {loading ? "Changing Avatar..." : "Change Avatar"}
          </button>
        </form>

        <Link to="/app/profile" className="text-red-500 hover:underline">
          Cancel Change
        </Link>
      </div>
    </div>
  );
}

export default ChangeAvatar;
