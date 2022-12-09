import React, {useState,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then(setUsers);
  }, []);

  function addUser (newUser) {
    const updatedUsersArray = [...users, newUser];
    setUsers(updatedUsersArray);
  }


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register onAddUser={addUser} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
