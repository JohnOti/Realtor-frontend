import { useState } from "react";

function NewHouseForm({ onAddHouse }) {
  const [formData, setFormData] = useState({
    location: "",
    value: "",
    description: "",
    img_url: "",
    name: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        value: formData.value,
        location: formData.location,
        img_url: formData.img_url,
        description: formData.description,
      }),
    })
      .then((r) => r.json())
      .then((newHouse) => onAddHouse(newHouse));
  }

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
          value={formData.location}
          onChange={handleChange}
          type="Location"
          placeholder="location"
          id="location"
          name="location"
        />

        <label htmlFor="img_url">Image Url</label>
        <input
          value={formData.img_url}
          onChange={handleChange}
          name="img_url"
          id="img_url"
          placeholder="url"
        />

        <label htmlFor="description">Description</label>
        <input
          value={formData.description}
          onChange={handleChange}
          name="description"
          id="description"
          placeholder="description"
        />
        <button type="submit">Add</button>
      </form>
      <button
        className="link-btn"
        // onClick={() => props.onFormSwitch("login")}
      ></button>
    </div>
  );
}

export default NewHouseForm;
