import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    const photo = e.target.photo.value;
  
    setError("");
    setSuccess(false);
  
    if (!terms) {
      setError("Please accept our terms & conditions.");
      return;
    }
  
    if (password.length < 6) {
      setError("Password should be 6 characters or longer.");
      return;
    }
  
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must include at least one uppercase, one lowercase, one number & one special character."
      );
      return;
    }
  
    if (name.length < 5) {
      setError("Name must be at least 5 characters long.");
      return;
    }
  
    createUser(email, password, name, photo)
      .then(() => {
        e.target.reset();
        setSuccess(true);
        navigate("/start-learning");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute right-3 top-12"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="form-control">
              <label className="label justify-start cursor-pointer">
                <input name="terms" type="checkbox" className="checkbox" />
                <span className="label-text ml-2">
                  Accept Our Terms & Conditions.
                </span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          {error && <p className="text-red-600 text-center">{error}</p>}
          {success && <p className="text-green-600">Sign-up Successful.</p>}
          <p className="text-center text-lg mb-4 my-1">
            Already signed up? Please <Link className="font-bold text-red-500" to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
