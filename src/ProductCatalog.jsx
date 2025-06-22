import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const sampleProducts = [
  { name: "Lampada Bourgie", brand: "Kartell", type: "Lampada", price: 200, image: "/product1.png" },
  { name: "Sedia Masters", brand: "Kartell", type: "Sedia", price: 180, image: "/product2.png" },
  { name: "Caffettiera Pulcina", brand: "Alessi", type: "Caffettiera", price: 60, image: "/product3.jpg" },
];

const brands = ["Tutti", ...Array.from(new Set(sampleProducts.map(p => p.brand)))];
const types = ["Tutti", ...Array.from(new Set(sampleProducts.map(p => p.type)))];

export default function ProductCatalog() {
  const [brand, setBrand] = useState("Tutti");
  const [type, setType] = useState("Tutti");
  const [maxPrice, setMaxPrice] = useState("");
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const filtered = sampleProducts.filter(p =>
    (brand === "Tutti" || p.brand === brand) &&
    (type === "Tutti" || p.type === type) &&
    (maxPrice === "" || p.price <= Number(maxPrice))
  );

  function addToCart(product) {
    setCart(prev => {
      const found = prev.find(item => item.name === product.name);
      if (found) {
        return prev.map(item =>
          item.name === product.name ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function removeFromCart(name) {
    setCart(prev => prev.filter(item => item.name !== name));
  }

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Catalogo Prodotti</h1>
      <div className="flex flex-wrap justify-center mb-6 gap-4">
        <select value={brand} onChange={e => setBrand(e.target.value)} className="px-3 py-2 rounded border">
          {brands.map(b => <option key={b} value={b}>{b}</option>)}
        </select>
        <select value={type} onChange={e => setType(e.target.value)} className="px-3 py-2 rounded border">
          {types.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <input
          type="number"
          placeholder="Prezzo massimo"
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value)}
          className="px-3 py-2 rounded border w-40"
          min="0"
        />
      </div>

      {/* Carrello */}
      <div className="bg-gray-100 rounded-xl p-4 mb-8 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-2">Carrello</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Il carrello è vuoto.</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li key={item.name} className="flex justify-between items-center mb-2">
                <span>{item.name} x{item.qty}</span>
                <span>{item.price * item.qty} €</span>
                <button
                  className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                  onClick={() => removeFromCart(item.name)}
                >
                  Rimuovi
                </button>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <div>
            <div className="mt-2 font-bold">
              Totale: {cart.reduce((sum, item) => sum + item.price * item.qty, 0)} €
            </div>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded w-full"
              onClick={() => navigate("/Carrello")}
            >
              Vai al carrello
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-6">
        {filtered.map(p => (
          <div
            key={p.name}
            className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-xl shadow p-4"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-32 h-32 object-cover rounded-xl mb-4 md:mb-0 md:mr-8"
            />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-500">{p.brand} &middot; {p.type}</p>
              <p className="text-lg font-bold mt-2">{p.price} €</p>
              <button
                className="mt-4 px-4 py-2 bg-black text-white rounded"
                onClick={() => addToCart(p)}
              >
                Aggiungi al carrello
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}