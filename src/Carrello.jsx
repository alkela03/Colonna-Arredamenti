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
      {/* Messaggio finale */}
      <div className="mt-12 text-center text-base text-gray-700 font-medium">
        Per procedere all'acquisto, è semplice! Manda una e-mail a <a href="mailto:info@colonnaarredamenti.com" className="text-blue-700 underline">info@colonnaarredamenti.com</a> o chiama al <a href="tel:0835336571" className="text-blue-700 underline">0835 336571</a>
      </div>
    </section>
  );
}