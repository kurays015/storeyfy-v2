import { BannerCarousel } from "@/components/BannerCarousel";
import CategoryAccordion from "@/components/CategoryAccordion";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <BannerCarousel />
      <div className="flex gap-10 ">
        <CategoryAccordion />
        <Products />
      </div>
    </main>
  );
}
