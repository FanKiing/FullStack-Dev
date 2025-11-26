import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Livres from "./components/Livres";
import DetailsLivre from "./components/DetailsLivre";
import FormLivre from "./components/FormLivre";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Livres />} />
        <Route path="/add" element={<FormLivre />} />
        <Route path="/edit/:isbn" element={<FormLivre />} />
        <Route path="/details/:isbn" element={<DetailsLivre />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
