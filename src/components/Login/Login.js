import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../Slice/authSlice";
import "./Login.css";



const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginPage = () => {
    dispatch(login());
    navigate("/cart");
  };
  return (
    <div className="login-container">
      <h2> Login </h2>
      <button className="login-button" onClick={handleLoginPage}>
        {" "}
        Login{" "}
      </button>
    </div>
  );
};

export default Login;
