import { BannerCarousel } from "@/components/BannerCarousel";
import ProductSection from "@/components/products/ProductSection";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto pb-96">
      <BannerCarousel />
      <ProductSection />
    </main>
  );
}
