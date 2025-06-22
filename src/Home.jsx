import { HeroSection } from "./components/HeroSection";
import { BrandGrid } from "./components/BrandGrid";
import { ProductHighlight } from "./components/ProductHighlight";
import { Footer } from "./components/Footer";

function Home() {
  return (
    <main>
      <HeroSection />
      <BrandGrid />
      <ProductHighlight />
      <Footer />
    </main>
  );
}
export default Home;
