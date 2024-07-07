import OurServices from "@/components/testimonials/our-services";
import SummerCollection from "@/components/testimonials/summer-collection";
import Testimonial from "@/components/testimonials/Testimonial";

export default function Testimonials() {
  return (
    <div className="my-12 flex justify-center gap-8 customSm:flex-col lg:flex-row">
      <Testimonial />
      <SummerCollection />
      <OurServices />
    </div>
  );
}
