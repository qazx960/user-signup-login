import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./component/Header";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

      <Route path='/login' element={<Login />} /> 
        <Route path='/signup' element={<Signup />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
