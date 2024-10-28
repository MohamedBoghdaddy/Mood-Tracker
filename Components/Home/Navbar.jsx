"use client"; // Ensures the file is treated as a client component

import Link from "next/link";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation"; // Updated import for useRouter in Next.js 13+
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logo from "../assets/images/logo.png"; // Adjust path as per your project
import Login from "../Login&Register/Login"; // Adjust path to Login component
import { useAuthContext } from "../../../context/AuthContext";
import { useLogout } from "../../../hooks/useLogout";
import { DashboardContext } from "../../../context/DashboardContext"; // Import the DashboardContext

const NavBar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { searchPublicWorkspaces } = useContext(DashboardContext);
  const router = useRouter();
  const { state } = useAuthContext();
  const { user, isAuthenticated } = state;
  const { logout } = useLogout();

  const handleLoginModalOpen = () => setShowLoginModal(true);

  const handleLoginModalClose = () => setShowLoginModal(false);

  const handleLogout = async () => {
    logout();
    router.push("/");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      router.push(`/workspaces?term=${searchTerm}`);
    }
  };

  return (
    <nav className="flex items-center justify-between fixed top-0 w-full h-16 bg-gray-800 text-white z-50 px-6">
      <div className="flex items-center">
        <Link href="/">
          <Image src={logo} alt="Company Logo" width={80} height={50} />
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <Link href="/" className="text-gray-400 hover:text-white text-lg">
          HOME
        </Link>
        <Link
          href="/contact"
          className="text-gray-400 hover:text-white text-lg"
        >
          Contact Us
        </Link>
        {isAuthenticated && (
          <Link
            href="/dashboard"
            className="text-gray-400 hover:text-white text-lg"
          >
            Dashboard
          </Link>
        )}
      </div>

      <div className="flex items-center space-x-4">
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="text-white hover:text-gray-300 flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            <span>Logout</span>
          </button>
        ) : (
          <button
            onClick={handleLoginModalOpen}
            className="text-white hover:text-gray-300 flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            <span>Login</span>
          </button>
        )}

        <form onSubmit={handleSearchSubmit} className="flex">
          <input
            type="text"
            className="px-3 py-2 rounded-lg text-black"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="ml-2 bg-blue-500 text-white px-3 py-2 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>

      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <button
              onClick={handleLoginModalClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
            <Login onLoginSuccess={handleLoginModalClose} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
