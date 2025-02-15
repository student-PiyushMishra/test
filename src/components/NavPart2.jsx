import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Ensure lucide-react is installed

const NavPart2 = () => {
  const location = useLocation(); // Get current route
  const [isOpen, setIsOpen] = useState(false); // State for menu toggle

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="relative">
      {/* Hamburger Icon (Visible on Small Screens) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Nav Links (Responsive) */}
      <div
        className={`absolute right-0 top-14 w-48 bg-[#0c0c0c] md:bg-transparent shadow-md md:shadow-none md:static md:w-auto md:flex md:items-center space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0 transition-all ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="/"
          className={`block md:inline neuefont py-2 px-4 ${
            isActive("/") ? "text-[#24cfa5]" : "text-white"
          }`}
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>

        <Link
          to="/about"
          className={`block md:inline neuefont py-2 px-4 ${
            isActive("/about") ? "text-[#24cfa5]" : "text-white"
          }`}
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>

        <Link
          to="/music"
          className={`block md:inline neuefont py-2 px-4 ${
            isActive("/music") ? "text-[#24cfa5]" : "text-white"
          }`}
          onClick={() => setIsOpen(false)}
        >
          Music
        </Link>

        <Link
          to="/users"
          className={`block md:inline neuefont py-2 px-4 ${
            isActive("/users") ? "text-[#24cfa5]" : "text-white"
          }`}
          onClick={() => setIsOpen(false)}
        >
          Users
        </Link>
      </div>
    </div>
  );
};

export default NavPart2;
