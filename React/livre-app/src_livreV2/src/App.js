import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Livres from "./components/Livres";
import DetailsLivre from "./components/DetailsLivre";
import FormLivre from "./components/FormLivre";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Livres />} />
          <Route path="/add" element={<FormLivre />} />
          <Route path="/edit/:isbn" element={<FormLivre />} />
          <Route path="/details/:isbn" element={<DetailsLivre />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
