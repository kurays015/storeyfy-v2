import { BannerCarousel } from "@/components/BannerCarousel";
import Testimonials from "@/components/testimonials/Testimonials";
import ProductSection from "@/components/products/ProductSection";
import Blogs from "@/components/Blogs";

export default function Home() {
  return (
    <main className="customSm:px-4 lg:container mb-12">
      <BannerCarousel />
      <ProductSection />
      <Testimonials />
      <Blogs />
    </main>
  );
}
