import Testimonial from "@/components/testimonials/Testimonial";
import OurServices from "@/components/testimonials/OurServices";
import SummerCollection from "@/components/testimonials/SummerCollection";

export default function Testimonials() {
  return (
    <div className="my-12 flex justify-center gap-8 customSm:flex-col lg:flex-row">
      <Testimonial />
      <SummerCollection />
      <OurServices />
    </div>
  );
}
