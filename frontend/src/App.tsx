import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import { Home, Login, SignUp } from "./pages";

function App() {
  const store = useSelector((state) => state);
  console.log(store);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
