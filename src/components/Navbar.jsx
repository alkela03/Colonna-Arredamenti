import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
      <Link to="/" className="text-xl font-bold">Colonna Arredamenti</Link>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home </Link>
        <Link to="/chi-siamo" className="hover:underline">Chi siamo </Link>
        <Link to="/catalogo" className="hover:underline">Catalogo </Link>
        <Link to="/progetti" className="hover:underline">Progetti </Link>
        <Link to="/Carrello" className="hover:underline">Carrello </Link>
      </div>
    </nav>
  );
}