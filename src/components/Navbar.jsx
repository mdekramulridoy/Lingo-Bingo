import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("User signed out successfully");
        navigate("/login");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className="px-2 py-1">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/start-learning" className="px-2 py-1">
          Start-learning
        </NavLink>
      </li>
      <li>
        <NavLink to="/tutorials" className="px-2 py-1">
          Tutorials
        </NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink to="/login" className="px-2 py-1">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" className="px-2 py-1">
              SignUp
            </NavLink>
          </li>
        </>
      )}
      {user && (
        <li>
          <NavLink to="/profile" className="px-2 py-1">
            My Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div>
        <h1 className="text-center mt-3 text-green-500">
          {user ? <span>Welcome {user.displayName || "User"}</span> : ""}
        </h1>
      </div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow flex flex-col gap-2"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-2">
            <img
              className="lg:w-12 md:w-10 w-8"
              src="https://i.ibb.co.com/7V7Z6pq/0a252542-8326-4952-a36a-5814ad6ce888-033234.png"
              alt="Lingo Bingo Logo"
            />
            <h1 className="font-bold lg:text-xl">Lingo Bingo</h1>
          </Link>
        </div>
        <div className="navbar-center hidden md:flex  lg:flex">
          <ul className="menu gap-2 menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-2">
              <img
                src={
                  user.photoURL ||
                  "https://i.ibb.co.com/ph6PK0H/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
                }
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <button
                onClick={handleSignOut}
                className="bg-[#08ABE9] font-bold text-white py-2 px-4 rounded-xl"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
