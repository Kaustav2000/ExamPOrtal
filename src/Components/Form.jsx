import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  let [formData, setFormData] = useState({
    username: "",
    email: "",
    date: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const showError = () => toast("Please Fill the form");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.username.length ||
      !formData.email.length ||
      !formData.date.length
    ) {
      return showError();
    }
    localStorage.setItem("token", "abc");
    navigate("/ExamPortal");
  };
  return (
    <form onChange={handleChange} onSubmit={handleSubmit} className="form">
      <h1>Welcome</h1>
      <p>Please enter your details</p>
      <input
        type="text"
        placeholder="Enter your Name "
        name="username"
        value={formData.username}
        className="form-input"
      />
      <input
        type="email"
        placeholder="Enter your Email "
        name="email"
        value={formData.email}
        className="form-input"
      />
      <input
        type="date"
        placeholder="Enter your DOB "
        name="date"
        value={formData.date}
        className="form-input"
      />
      <button type="submit">Submit Form</button>
      <ToastContainer />
    </form>
  );
};

export default Form;
