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
    <div className="lg:w-[300px]">
      <HeaderTitle className="mb-6 border-b text-lg font-semibold tracking-wide text-slate-700 dark:text-white">
        Our Services
      </HeaderTitle>
      <div className="md flex flex-1 rounded-xl border p-8 customSm:flex-col customSm:gap-4 600px:flex-row 600px:flex-wrap 600px:gap-8 lg:max-h-[380px] lg:gap-6">
        {deliveryInfo.map(({ icon, title, description }) => (
          <div key={title} className="mx-auto flex min-w-52 items-center gap-4">
            <div className="text-3xl text-red-500">{icon}</div>
            <div>
              <h1 className="font-bold text-gray-500 dark:text-gray-100">
                {title}
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
