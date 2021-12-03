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
    window.location.reload();
  };
  return (
    <form onChange={handleChange} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your Name "
        name="username"
        value={formData.username}
      />
      <input
        type="email"
        placeholder="Enter your Email "
        name="email"
        value={formData.email}
      />
      <input
        type="date"
        placeholder="Enter your DOB "
        name="date"
        value={formData.date}
      />
      <button type="submit"> Submit Form</button>
      <ToastContainer />
    </form>
  );
};

export default Form;
