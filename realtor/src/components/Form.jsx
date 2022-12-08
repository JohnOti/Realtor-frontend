import React, { useState } from "react";

export const Form = ({onAddUser},props) => {
    const [formData, setFormData] = useState({
        name: '',
        value: '',
        location: '',
        image_url: '',
        description: '',
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
         
        const newUser = {
            ...formData
        };

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser),
        })
                .then((res) => res.json())
                .then((data) => {
                    setFormData({
                        name: '',
                        value: '',
                        location: '',
                        image_url: '',
                        description: '',
                    });
                    onAddUser(data);
                });
        };

    return (
      <div className="auth-form-container">
        <h2>Add a new house</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Name</label>
          <input
            value={formData.username}
            onChange={handleChange}
            name="username"
            id="username"
            placeholder="Estate name"
          />
          <label htmlFor="value">Value</label>
          <input
            value={formData.value}
            onChange={handleChange}
            type="value"
            placeholder="house value"
            id="value"
            name="value"
          />
          <label htmlFor="location">Location</label>
          <input
            value={formData.password}
            onChange={handleChange}
            type="Location"
            placeholder="location"
            id="location"
            name="location"
          />

          <label htmlFor="image_url">Image Url</label>
          <input
            value={formData.image_url}
            onChange={handleChange}
            name="image_url"
            id="image_url"
            placeholder="url"
          />

          <label htmlFor="description">Description</label>
          <input
            value={formData.location}
            onChange={handleChange}
            name="description"
            id="description"
            placeholder="description"
          />
          <button type="submit">Add</button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("login")}
        >
        </button>
      </div>
    );
}
export default Form;
