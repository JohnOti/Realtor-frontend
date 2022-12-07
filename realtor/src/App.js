import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

 

  function handleAddUser(newUser) {
    setUsers([...users, newUser]);
  }

  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login  />} />
          <Route path="/register" element={<Register  onAddUser={handleAddUser} />} />
        </Routes>
      </BrowserRouter>

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
