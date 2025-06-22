import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductPage from "./ProductPage";
import About from "./About";
import ProductCatalog from "./ProductCatalog";
import BrandPage from "./BrandPage";
import { Navbar } from "./components/Navbar";
import { Progetti } from "./components/Progetti";
import  Carrello  from "./Carrello";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prodotto" element={<ProductPage />} />
        <Route path="/chi-siamo" element={<About />} />
        <Route path="/catalogo" element={<ProductCatalog />} />
        <Route path="/brand/:name" element={<BrandPage />} />
        <Route path="/progetti" element={<Progetti />} />
        <Route path="/Carrello" element={<Carrello />} />
      </Routes>
    </Router>
  );
}