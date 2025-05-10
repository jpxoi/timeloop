import React from "react";
import { Link } from "react-router-dom";
import not_found_image from "../../assets/illustrations/not-found.svg";

function NotFound() {
  return (
    <div className="grid h-screen place-content-center bg-white px-4 w-full">
      <div className="text-center">
        <object
          className="mx-auto w-96"
          data={not_found_image}
          type="image/svg+xml"
        />
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>

        <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>

        <Link
          to="/"
          className="mt-6 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
