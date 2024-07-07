import { BannerCarousel } from "@/components/banner-carousel";
import ProductSection from "@/components/products/product-section";
import BlogsContainer from "@/components/blogs-container";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <main className="mb-12 xl:container customSm:px-4 md:mx-auto md:max-w-3xl lg:max-w-7xl">
      <BannerCarousel />
      <ProductSection />
      <Testimonials />
      <BlogsContainer />
    </main>
  );
}
