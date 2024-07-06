import SideBar from "@/components/side-bar";
import Products from "@/components/products/products";

export default function ProductSection() {
  return (
    <div className="lg:flex lg:gap-7">
      <SideBar />
      <Products />
    </div>
  );
}
