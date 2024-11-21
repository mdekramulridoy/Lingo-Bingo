import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Profile = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    document.title = "My Profile";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user ? user.displayName : "User"}</h1>
      <button className="btn hover:bg-green-500 bg-[#08ABE9] text-white">
        <Link to="/update-profile">Update Profile</Link>
      </button>
    </div>
  );
};

export default Profile;
