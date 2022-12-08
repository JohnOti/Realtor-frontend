import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import HouseContainer from "./components/HouseContainer";
import Form from "./components/Form";

function App() {

  const [users, setUsers] = useState([]);
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  useEffect(() => {
    fetch("/properties")
      .then((res) => res.json())
      .then(setHouses);
  }, []);

 

  function handleAddUser(newUser) {
    setUsers([...users, newUser]);
  }

  function handleDeleteHouse(houseToDelete) {
    const updatedHouse = houses.filter((data) => data.id !== houseToDelete.id);
    setUsers(updatedHouse);
  }

  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login  />} />
          <Route path="/register" element={<Register onAddUser={handleAddUser} />} />
          <Route path="/houses" element={<HouseContainer onDeleteHouse={handleDeleteHouse} />} />
          <Route path="/form" element={<Form onAddUser={handleAddUser} />} />

        </Routes>

      <Footer />
      {/* {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} onAddUser={handleAddUser} />
      )} */}
    </div>
  );
}

export default App;
