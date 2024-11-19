import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate(); // Use this hook to navigate programmatically

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("User signed out successfully");
        navigate("/login"); // Redirect to login after sign-out
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">SignUp</NavLink>
          </li>
        </>
      )}
      {user && (
        <>
          <li>
            <NavLink to="/profile">My Profile</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      {/* Welcome message */}
      <div>
        <h1 className="text-center mt-3 text-green-500">
          {user ? <span>Welcome {user.displayName}</span> : ""}
        </h1>
      </div>

      {/* Navbar */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-2">
            <img
              className="w-12"
              src="https://i.ibb.co.com/7V7Z6pq/0a252542-8326-4952-a36a-5814ad6ce888-033234.png"
              alt=""
            />
            <h1 className="font-bold text-xl">Lingo Bingo</h1>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
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
              <button onClick={handleSignOut} className="btn">
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
