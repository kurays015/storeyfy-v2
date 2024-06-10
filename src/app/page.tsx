import { BannerCarousel } from "@/components/BannerCarousel";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <BannerCarousel />
      <ProductSection />
    </main>
  );
}
