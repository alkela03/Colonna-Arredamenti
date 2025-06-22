import { useNavigate } from 'react-router-dom';

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      className="w-full h-[40vh] flex items-start justify-center bg-cover bg-center pt-8"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="bg-white/80 p-6 rounded-2xl text-center max-w-2xl">
        <h1 className="text-4xl font-bold">Colonna Arredamenti</h1>
        <p className="mt-4 text-lg">
          Dal 1899, design senza tempo. Mobili e oggetti iconici da vivere ogni giorno.
        </p>
        <button
          className="mt-6 px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
          onClick={() => navigate('/catalogo')}
        >
          Scopri i nostri marchi
        </button>
      </div>
    </section>
  );
}