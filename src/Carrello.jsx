import { useCart } from "./CartContext";

export default function Carrello() {
  const { cart } = useCart();

  const totale = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <section className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Il tuo carrello</h1>
      {cart.length === 0 ? (
        <p>Il carrello è vuoto.</p>
      ) : (
        <ul className="mb-4">
          {cart.map(item => (
            <li key={item.name} className="flex justify-between border-b py-2">
              <span>{item.name} x{item.qty}</span>
              <span>{item.price * item.qty} €</span>
            </li>
          ))}
        </ul>
      )}
      <div className="text-right font-bold text-lg">
        Totale: {totale} €
      </div>
    </section>
  );
}