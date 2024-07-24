import { z } from "zod";

const validRatings = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5] as const;
export const RatingSchema = z
  .enum(validRatings.map(String) as unknown as [string, ...string[]])
  .transform(Number)
  .optional();
