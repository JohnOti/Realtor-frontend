import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  function handleAddUser(newUser) {
    setUsers([...users, newUser]);
  }

  return (
    <div className="App">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} onAddUser={handleAddUser} />
      )}
    </div>
  );
}

export default App;
