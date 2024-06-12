import { BannerCarousel } from "@/components/BannerCarousel";
import ProductSection from "@/components/products/ProductSection";

export default function Home() {
  return (
    <main className="container pb-96">
      <BannerCarousel />
      <ProductSection />
    </main>
  );
}
