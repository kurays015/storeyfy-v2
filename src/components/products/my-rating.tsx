import {
  FiveStar,
  FourPointFiveStar,
  FourStar,
  OnePointFiveStar,
  OneStar,
  ThreePointFiveStar,
  ThreeStar,
  TwoPointFiveStar,
  TwoStar,
} from "@/components/star-icons";
import { RatingProps } from "@/types";

type RatingValue = 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

type StarsComponent = {
  [key in RatingValue]: JSX.Element;
};

const starComponents = {
  1: <OneStar />,
  1.5: <OnePointFiveStar />,
  2: <TwoStar />,
  2.5: <TwoPointFiveStar />,
  3: <ThreeStar />,
  3.5: <ThreePointFiveStar />,
  4: <FourStar />,
  4.5: <FourPointFiveStar />,
  5: <FiveStar />,
};

export default function Rating({ rating }: RatingProps) {
  const StarComponent = starComponents[rating as keyof StarsComponent];

  return <div className="text-yellow-500">{StarComponent}</div>;
}
