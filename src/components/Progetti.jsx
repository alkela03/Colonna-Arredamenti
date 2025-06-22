export function Progetti() {
  // Array di descrizioni, una per ogni immagine
  const progetti = Array.from({ length: 20 }, (_, i) => ({
    img: `/design${i + 1}.png`,
    titolo: `Progetto ${i + 1}`,
    descrizione: `Descrizione del progetto ${i + 1}.`,
  }));

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">I nostri progetti</h2>
      <p>Qui troverai una selezione degli allestimenti progettati per i nostri clienti.</p>
      <div className="flex flex-col gap-12 mt-8">
        {progetti.map((progetto, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-xl shadow p-4">
            <img
              src={progetto.img}
              alt={progetto.titolo}
              className="mb-4 md:mb-0 md:mr-8 rounded-xl object-cover max-h-40 md:w-64"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">{progetto.titolo}</h3>
              <p className="text-gray-700">{progetto.descrizione}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}