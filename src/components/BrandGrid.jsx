import { Link } from "react-router-dom";
const brands = [
  { name: "Kartell", image: "/kartell-logo.png" },
  { name: "Alessi", image: "/alessi-logo.png" },
  { name: "Cassina", image: "/cassina-logo.png" },
  { name: "Flos", image: "/flos-logo.png" },
  { name: "Flou", image: "/flou-logo.png" },
  

];

export function BrandGrid() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">I nostri brand</h2>
      <div className="flex flex-wrap justify-center gap-6 items-end">
        {brands.map((brand) => (
          <div key={brand.name} className="flex flex-col items-center w-32">
            <Link to={`/catalogo=${encodeURIComponent(brand.name)}`}>
              <img
                src={brand.image}
                alt={brand.name}
                className="h-12 max-w-[80px] object-contain mx-auto bg-white p-2"
              />
            </Link>
            <div className="mt-2 text-center text-sm font-medium">{brand.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}