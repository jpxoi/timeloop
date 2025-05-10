import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteAccount } from "../../Helpers/Auth";

function DeleteAccount() {
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    const input = document.querySelector("input");
    const button = document.querySelector("button");

    input.addEventListener("input", (e) => {
      if (e.target.value === "DELETE") {
        input.setCustomValidity("");
        button.disabled = false;
      }

      if (e.target.value !== "DELETE") {
        input.setCustomValidity("Please type DELETE to confirm");
        button.disabled = true;
      }

      input.reportValidity();
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    const submitButton = document.querySelector("button");
    submitButton.disabled = true;

    deleteAccount(localStorage.getItem("user_id"))
      .then((data) => {
        console.log(data);
        localStorage.clear();
        window.location.replace("/");
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred. Please try again.");
        submitButton.disabled = false;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center m-auto bg-gray-100">
      <div className="w-screen-lg bg-white shadow-md rounded-lg flex flex-col items-center justify-center py-8 px-8 space-y-4">
        <h1 className="text-2xl font-bold">Delete Account</h1>

        <form
          className="flex flex-col items-center justify-center space-y-4 w-[300px]"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Type DELETE to confirm"
            className="w-full p-2 border border-gray-300 rounded-md focus:invalid:border-red-500 focus:invalid:ring-red-500 focus:valid:border-green-500 focus:valid:ring-green-500"
            pattern="DELETE"
            required
          />

          <button
            disabled
            type="submit"
            className="w-full p-2 bg-red-500 text-white font-semibold rounded-md disabled:opacity-50"
          >
            {loading ? "Deleting Account..." : "Delete Account"}
          </button>
        </form>

        <Link to="/app/account" className="text-red-500 hover:underline">
          Cancel Deletion
        </Link>
      </div>
    </div>
  );
}

export default DeleteAccount;
