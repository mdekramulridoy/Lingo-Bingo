import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext); 

  useEffect(() => {
    document.title = "My Profile"; 
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold mb-4 text-center text-indigo-600">
        Welcome, {user ? user.displayName : "User"}
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <div className="flex flex-col items-center">
 
          <img
            src={user?.photoURL || ""}
            alt="Profile"
            className="rounded-full w-32 h-32 mb-4 object-cover"
          />

          <p className="text-lg font-semibold text-gray-800 mb-2">
            Name: {user ? user.displayName : "N/A"}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            Email: {user ? user.email : "N/A"}
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <Link to="/update-profile">
            <button className="btn hover:bg-green-500 bg-[#08ABE9] text-white px-6 py-2 rounded-full">
              Update Profile
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <Link to="/start-learning">
          <button className="btn hover:bg-green-500 bg-[#08ABE9] text-white px-6 py-2 rounded-full">
            Start Learning
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
