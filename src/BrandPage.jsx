import { useParams } from "react-router-dom";

const brandDescriptions = {
  Kartell: "Kartell è sinonimo di innovazione, colore e trasparenza. Dalla plastica alle icone del design.",
  Alessi: "Alessi combina funzionalità e arte per creare oggetti per la casa che emozionano.",
};

export default function BrandPage() {
  const { name } = useParams();
  const description = brandDescriptions[name] || "Brand non trovato.";

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <p className="text-lg text-gray-700 mb-6">{description}</p>
      <p>Scopri i prodotti {name} nel nostro <a href="/catalogo" className="text-blue-600 underline">catalogo completo</a>.</p>
    </section>
  );
}