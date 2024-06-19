import { BannerCarousel } from "@/components/BannerCarousel";
import Testimonials from "@/components/testimonials/Testimonials";
import ProductSection from "@/components/products/ProductSection";
import Blogs from "@/components/Blogs";

export default function Home() {
  return (
    <main className="mb-12 xl:container customSm:px-4 md:mx-auto md:max-w-3xl lg:max-w-7xl">
      <BannerCarousel />
      <ProductSection />
      <Testimonials />
      <Blogs />
    </main>
  );
}
