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
import NewHouse from "./components/NewHouse";

function App() {

  // const [users, setUsers] = useState([]);
  const [houses, setHouses] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    fetch("/properties")
      .then((res) => res.json())
      .then(setHouses);
  }, []);

 function handleAddHouse(newHouse) {
    setHouses([...houses, newHouse]);
 }
  
  function updatedHouse(updatedHouse) {
    const updatedHouses = houses.map((house) => {
      if (house.id === updatedHouse.id) {
        return updatedHouse;
      } else {
        return house;
      }
    });
    setHouses(updatedHouses);
  }


  function handleDeleteHouse(houseToDelete) {
    const updatedHouse = houses.filter((data) => data.id !== houseToDelete.id);
    setHouses(updatedHouse);
  }

  const displayHouses = houses.filter((house) => {
    return house.location.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/houses" element={<HouseContainer onDeleteHouse={handleDeleteHouse} houses={houses} onUpdateHouse={updatedHouse} />} />
        <Route path="/newhouse" element={<NewHouse onAddHouse={handleAddHouse} />} />
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
