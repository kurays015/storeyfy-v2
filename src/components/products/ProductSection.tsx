import SideBar from "@/components/SideBar";
import Products from "@/components/products/Products";

export default function ProductSection() {
  return (
    <div className="lg:flex lg:gap-7">
      <SideBar />
      <Products />
    </div>
  );
}
