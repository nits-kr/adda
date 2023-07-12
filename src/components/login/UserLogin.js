import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Correct import for navigation
import Swal from "sweetalert2";
import { useUserLoginMutation } from "../../services/Post";

function UserLogin() {
  const [loginData, res] = useUserLoginMutation();
  console.log("login data", loginData);
  console.log("response", res);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (res.isSuccess) {
      Swal.fire({
        title: "Login Successful!",
        icon: "success",
        text: "You have successfully logged in.",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/home");
        }
      });
    }
  }, [res, navigate]);

  const handleSaveChanges = (e) => {
    e.preventDefault();
    const newAddress = {
      userName: userName,
      password: password,
    };
    loginData(newAddress);
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-6 ">
          <div className="LoginSec">
            <div className="LoginImg">
              <img src="img/logo.svg" alt="" style={{ width: "40vh" }} />{" "}
            </div>
            <div className="LoginTitle">Login</div>
            <form>
              <div className="group mt-5">
                {/* <input type="text" /> */}
                <input
                  type="text"
                  // className="form-control"
                  id="userName"
                  // placeholder="Email Address"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>User Name</label>
              </div>
              <div className="group">
                <input
                  type="password"
                  // className="form-control"
                  id="password"
                  // placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="highlight" />
                <span className="bar" />
                <label htmlFor="password">Password</label>
              </div>
              <button
                type="button"
                className="btn  btn-primary"
                onClick={handleSaveChanges}
              >
                Login
              </button>
              <button type="button" className=" btn  btn-danger ms-2">
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-6  loginBg ">
          <img src="img/login-img.png" alt="" />{" "}
        </div>
      </div>
    </>
  );
}

export default UserLogin;
