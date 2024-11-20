import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInUser(email, password);
      e.target.reset();
      setError("");
      navigate("/start-learning");
    } catch (error) {
      setError("Login failed: " + error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      setError("");
      navigate("/start-learning");
    } catch (error) {
      setError("Google Sign-In failed: " + error.message);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {error && <p className="text-center mb-2 text-red-600">{error}</p>}
          <p className="mb-4 text-center">
            No Account ? Please{" "}
            <Link
              className="font-bold text-red-600 hover:underline"
              to="/register"
            >
              Sign Up
            </Link>
          </p>

          <div className="mb-4 flex justify-center">
            <button
              onClick={handleGoogleSignIn}
              className="btn text-green-500 font-bold text-lg flex gap-3  border-2"
            >
              <FaGoogle className="border-green-500"></FaGoogle>
              <h1 className="text-black">Sign In With Google</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
