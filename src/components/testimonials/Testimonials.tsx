import Testimonial from "@/components/testimonials/Testimonial";
import OurServices from "@/components/testimonials/OurServices";
import SummerCollection from "@/components/testimonials/SummerCollection";

export default function Testimonials() {
  return (
    <div className="flex gap-8 my-12 justify-center">
      <Testimonial />
      <SummerCollection />
      <OurServices />
    </div>
  );
}
