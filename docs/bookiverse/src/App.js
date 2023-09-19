import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./homepage/Navbar"; 
import Home from "./homepage/Home";
import Books from "./homepage/Books";
import Contact from "./homepage/Contact";
import About from "./homepage/About";
import Login from "./homepage/login";
import Register from "./homepage/Register";
import Addbook from "./homepage/Addbook";
import DeleteBook from "./homepage/Deletebook";



function App() {
  return (
    <div>
      <Navbar /> {/* Use the Navbar component here */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Addbook" element={<Addbook />} />
          <Route path="/Deletebook" element={<DeleteBook />} />
          
        </Routes>
      </div>      
    </div>

    

  );
}

export default App;
