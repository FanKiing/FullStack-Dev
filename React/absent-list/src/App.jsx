import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store/store";


import AppNavbar from "./components/AppNavbar";
import Home from "./components/Home";
import Stagiaires from "./components/Stagiaires";
import Absences from "./components/Absences";

export default function AppRoot() {
  return (
    <Provider store={store}>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stagiaires" element={<Stagiaires />} />
          <Route path="/absences" element={<Absences />} />
        </Routes>
      </Router>
    </Provider>
  );
}
