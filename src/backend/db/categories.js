import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "intelligence",
    description: "Knowledge/Wisdom/Intelligence",
  },
  {
    _id: uuid(),
    categoryName: "social skills",
    description: "Social Skills/Machiavellianism/Game",
  },
  {
    _id: uuid(),
    categoryName: "strength",
    description: "Strength/Aesthetics/Fitness",
  },
];
