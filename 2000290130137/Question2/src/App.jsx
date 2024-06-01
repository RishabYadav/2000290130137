import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import { Route, Routes } from "react-router-dom";
import MainCard from "./Components/MainCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path="/productPage/:id" element={<MainCard />} />
      </Routes>
    </>
  );
}

export default App;
