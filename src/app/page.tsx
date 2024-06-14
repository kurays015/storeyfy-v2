import { BannerCarousel } from "@/components/BannerCarousel";
import Testimonials from "@/components/testimonials/Testimonials";
import ProductSection from "@/components/products/ProductSection";

export default function Home() {
  return (
    <main className="container pb-96">
      <BannerCarousel />
      <ProductSection />
      <Testimonials />
    </main>
  );
}
