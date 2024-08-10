import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [cnfpassword, setCnfpassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCnfpassChange = (e) => {
    setCnfpassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    
    if(!role){
      alert("Please select a role.");
      return;
    }

    if (!password || password.length < 6) {
      alert("Password should be at least 6 characters long.");
      return;
    }
  
    if (!cnfpassword || cnfpassword.length < 6) {
      alert("Reentered password must be at least 6 characters long.");
      return;
    }
  
    if (cnfpassword !== password) {
      alert("Both passwords do not match.");
      return;
    }
  
    try {
      // Make an API call to your backend server
      const response = await axios.post("/api/signup", {
        email,
        password,
        role,
        cnfpassword, // Include the confirmed password in the request payload
      });
  
      // Handle the response from the backend
      console.log(response.data);
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.error(error);
    }
  };
  

  return (
    <div className="signup">
      <div className="container">
        <div className="imgContainer">
          <img
            src={require("../img/logo.png")}
            alt=<i class="fa-brands fa-cloudversify"></i>
          />
        </div>
        <div className="formContainer">
          <div className="heading">Please Fill The Following Details :</div>
          <div className="emailInp">
            <div className="headingEmail">Email :</div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            ></input>
          </div>
          <div className="roleInp">
            <div className="headingRole">Select Your Role:</div>
            <div className="radio-group">
              <div className="radio-option">
                <input
                  type="radio"
                  id="hr"
                  name="role"
                  value="hr"
                  checked={role === "hr"}
                  onChange={handleRoleChange}
                />
                <label htmlFor="hr">HR</label>
              </div>
              <div className="radio-option">
                <input
                  type="radio"
                  id="intern"
                  name="role"
                  value="intern"
                  checked={role === "intern"}
                  onChange={handleRoleChange}
                />
                <label htmlFor="intern">Intern</label>
              </div>
              <div className="radio-option">
                <input
                  type="radio"
                  id="employee"
                  name="role"
                  value="employee"
                  checked={role === "employee"}
                  onChange={handleRoleChange}
                />
                <label htmlFor="employee">Employee</label>
              </div>
            </div>
          </div>
          <div className="passwordInp">
            <div className="headingPass">Enter Your Password :</div>
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
          <div className="confirmPass">
            <div className="headingConfirmpass">Reenter Your Password :</div>
            <div className="password-input">
              <input
                type={"password"}
                placeholder="Reenter your password"
                value={cnfpassword}
                onChange={handleCnfpassChange}
                required
                minLength="8"
                maxLength="16"
              />
            </div>
          </div>
          <div className="signupBtn">
            <button onClick={handleSubmit}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
