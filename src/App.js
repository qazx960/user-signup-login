import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./component/Header";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState([])

  useEffect(() => {
    axios.get(' https://api.escuelajs.co/api/v1/users')
    .then((data) => {
      console.log(data.data)
      setUser(data.data)
    })
  },[])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login user={user} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
