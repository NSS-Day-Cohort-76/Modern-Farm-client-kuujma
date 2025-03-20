import { createCorn } from "../../prac.js";
import { createSoyBean } from "../../prac.js";
const corn = createCorn();
const soybean = createSoyBean();

////////////////////////////////////////////////////
const plantsArr = [];

export const addPlant = (seed) => {
  // 1.) need to push the individual seed objects into the plantsArr Array
  if (seed !== corn) {
    plantsArr.push(seed);
  }
  // 2.) need to iterate over the corn array and return individual corn objects
  if (seed === corn) {
    for (const seeds of seed) {
      plantsArr.push(seeds);
    }
  }
  return seed;
};

export const usePlants = () => {
  return plantsArr;
};
