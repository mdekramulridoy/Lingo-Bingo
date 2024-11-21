import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  useEffect(() => {
    document.title = "My Profile";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>
      <button className="btn hover:bg-green-500 bg-[#08ABE9] text-white">
        <Link to="/update-profile">Update Profile</Link>
      </button>
    </div>
  );
};

export default Profile;
