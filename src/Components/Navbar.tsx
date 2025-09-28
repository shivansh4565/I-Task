// import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md rounded-4xl mt-2  shadow-grey-500">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold tracking-wide">Itask</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <a
              href="/"
              className="hover: font-bold text-gray-200 transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/tasks"
              className="hover: font-bold text-gray-200 transition-colors duration-200"
            >
              Your Tasks
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
