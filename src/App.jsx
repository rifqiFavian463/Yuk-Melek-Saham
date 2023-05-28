import "./App.css";
import Home from "./page/Home/Home";
import Tujuan from "./page/Tujuan/Tujuan";
import Login from "./page/Login/Login";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Tujuan" element={<Tujuan />} />
      <button>Test</button>
    </Routes>
  );
}
