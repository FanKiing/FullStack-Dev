// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Stagiaires from "./Components/Stagiaire";
import Absences from "./Components/Absence";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/stagiaires" element={<Stagiaires />} />
        <Route path="/absences" element={<Absences />} />
        <Route path="/" element={<h1 className='text-center'>Bienvenue</h1>} />
      </Routes>
    </>
  );
}
