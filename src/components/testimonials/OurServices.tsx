import HeaderTitle from "@/components/HeaderTitle";
// Icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { TiArrowBack } from "react-icons/ti";
import { GiWorld } from "react-icons/gi";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";

const deliveryInfo = [
  {
    icon: <GiWorld />,
    title: "Worldwide Delivery",
    description: "For Order Over $100",
  },
  {
    icon: <IoIosRocket />,
    title: "Next Day Delivery",
    description: "UK Orders Only",
  },
  {
    icon: <BsFillTelephoneFill />,
    title: "Best Online Support",
    description: "Hours: 8AM - 11PM",
  },
  {
    icon: <TiArrowBack />,
    title: "Return Policy",
    description: "Easy & Free Return",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "30% Money Back",
    description: "For Order Over $100",
  },
];

export default function OurServices() {
  return (
    <div className="w-[300px] flex flex-col">
      <HeaderTitle className="font-semibold text-slate-700 mb-6 text-lg border-b border-b-gray-300 tracking-wide">
        Our Services
      </HeaderTitle>
      <div className="rounded-xl border overflow-hidden p-8 flex flex-col justify-center gap-6 flex-1">
        {deliveryInfo.map(({ icon, title, description }) => (
          <div key={title} className="flex items-center gap-4">
            <div className="text-red-500 text-3xl">{icon}</div>
            <div>
              <h1 className="font-bold text-gray-500">{title}</h1>
              <p className="text-sm text-slate-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
