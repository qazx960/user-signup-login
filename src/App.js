import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./component/Header";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import axios from "axios";
import { useState, useEffect } from "react";
import { Home } from "./pages/Home";

function App() {
  const [login, setLogin] = useState([])



  return (
    <BrowserRouter>
      <Header />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
