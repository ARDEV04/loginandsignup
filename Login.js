import React, { useState } from "react";
import "./Login.css";
import axios from "axios"; // Import axios or any other library for making API calls
import {  useNavigate  } from "react-router-dom";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLogin = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!password || password.length < 6) {
      alert("Password should be at least 6 characters long.");
      return;
    }

    try {
      // Make an API call to your backend server
      const response = await axios.post("/api/login", {
        email,
        password,
      });

      // Handle the response from the backend
      console.log(response.data);
      setEmail("");
      setPassword("");
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.error(error);
    }
  };

  const handleRedirect = () => {
    navigate("/Signup"); // Navigate to the /signup route
  };

  return (
    <div className="login">
      <div className="container">
        <div className="imgContainer">
          <img src={require("../img/logo.png")} alt=<i class="fa-brands fa-cloudversify"></i>/>
        </div>
        <div className="formContainer">
          <div className="credential">
            <div className="heading">Enter Your Email :</div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            ></input>
          </div>
          <div className="password">
            <div className="heading">Enter Your Password :</div>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                required
                minLength="8"
                maxLength="16"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="toggle-password"
              >
                {showPassword ? (
                  <i className="fa-solid fa-eye"></i>
                ) : (
                  <i className="fa-solid fa-eye-slash"></i>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="submitButton">
          <button className="btn" onClick={handleLogin}>
            Login
          </button>
          <div className="redirecter">
            Don't have an account?
            <button onClick={handleRedirect}>click here</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
