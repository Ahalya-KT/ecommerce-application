import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Desgination from "./page/Desgination";
import EmployeList from "./page/EmployeList";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home"  element={<Home />} />
        <Route path="employeeList" element={<EmployeList />} />
        <Route path="DesignationList" element={<Desgination />} />
        <Route path="/" index element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
