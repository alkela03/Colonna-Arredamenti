export default function ProductPage() {
  return (
    <section className="p-8 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        <img src="/product1.jpg" alt="Prodotto" className="w-full h-auto rounded-xl shadow" />
        <div>
          <h1 className="text-4xl font-bold mb-4">Lampada Bourgie - Kartell</h1>
          <p className="mb-6 text-lg">Disegnata da Ferruccio Laviani, unisce il barocco al policarbonato moderno. Un pezzo iconico della casa Kartell, disponibile in molteplici finiture.</p>
          <ul className="mb-6 text-sm text-gray-600 list-disc pl-5">
            <li>Materiale: Policarbonato trasparente o colorato in massa</li>
            <li>Dimensioni: H 68–78 cm (regolabile)</li>
            <li>Designer: Ferruccio Laviani</li>
          </ul>
          <button className="px-4 py-2 bg-black text-white rounded-xl">Richiedi informazioni</button>
        </div>
      </div>
      {/* Messaggio finale */}
      <div className="mt-12 text-center text-base text-gray-700 font-medium">
        Per procedere all'acquisto, è semplice! Manda una e-mail a <a href="mailto:info@colonnaarredamenti.com" className="text-blue-700 underline">info@colonnaarredamenti.com</a> o chiama al <a href="tel:0835336571" className="text-blue-700 underline">0835 336571</a>
      </div>
    </section>
  );
}