import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register({ onAddUser }, props) {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cfn_password: "",
    phone_number: "",
    location: "",
    professional_status: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const newUser = {
      ...formData,
    };

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          username: "",
          email: "",
          password: "",
          cfn_password: "",
          phone_number: "",
          location: "",
          professional_status: "",
        });
        onAddUser(data);
      });
    
    navigate("/home");
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Full name</label>
        <input
          value={formData.username}
          onChange={handleChange}
          name="username"
          id="username"
          placeholder="full name"
        />
        <label htmlFor="email">Email</label>
        <input
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={formData.password}
          onChange={handleChange}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />

        <label htmlFor="cfnpassword">Confirm Password</label>
        <input
          value={formData.password}
          onChange={handleChange}
          type="password"
          placeholder="********"
          id="cfnpassword"
          name="cfnpassword"
        />

        <label htmlFor="phone_number">Phone No</label>
        <input
          value={formData.phone_number}
          onChange={handleChange}
          name="phone_number"
          id="phone_number"
          placeholder="07********"
        />

        <label htmlFor="location">Location</label>
        <input
          value={formData.location}
          onChange={handleChange}
          name="location"
          id="location"
          placeholder="Kilimani, Nairobi, Kenya"
        />

        <label htmlFor="professional_status">Professional Status</label>
        <input
          value={formData.professional_status}
          onChange={handleChange}
          name="professional_status"
          id="professional_status"
          placeholder="Employed, Unemployed, Student, etc"
        />

        <button type="submit">Log In</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
}
