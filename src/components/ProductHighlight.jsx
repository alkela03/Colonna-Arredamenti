export function ProductHighlight() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-10">In evidenza</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <img src="/lampadabourgie.png" alt="Prodotto in evidenza" className="rounded shadow" style={{height: "128px", widht: "auto"}} />
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4">Lampada Bourgie, Kartell</h3>
          <p classname="text-1g mb-6">Prezzo: 2000€</p>
          <p className="text-lg mb-6">Un'icona del design contemporaneo: barocca, innovativa e personalizzabile. Disponibile in vari colori e finiture.</p>
          <button className="px-4 py-2 bg-black text-white rounded-xl">Scopri di più</button>
        </div>
      </div>
    </section>
  );
}