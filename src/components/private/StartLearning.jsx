import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const StartLearning = () => {
  const { user } = useContext(AuthContext); // Access user from context

  return (
    <div>
      <div  className="text-center mt-10">
      <h1 className="text-3xl font-bold text-[#08ABE9]">
        Welcome, {user?.displayName || "Learner"}! Let's Start Learning 🚀
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Begin your journey to master new skills and achieve your goals.
      </p>
      </div>
    </div>
  );
};

export default StartLearning;
