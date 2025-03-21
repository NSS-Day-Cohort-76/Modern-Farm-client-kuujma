const plantsArr = [];

// export const addPlant = (seed) => {
//   // 1.) need to push the individual seed objects into the plantsArr Array
//   if (seed !== corn) {
//     plantsArr.push(seed);
//   }
//   // 2.) need to iterate over the corn array and return individual corn objects
//   if (seed === corn) {
//     for (const seeds of seed) {
//       plantsArr.push(seeds);
//     }
//   }
//   return seed;
// };

// export const usePlants = () => {
//   return [...plantsArr];
// };
export const addPlant = (seed) => {
  // If the seed is an array (e.g., corn seeds), add each item individually
  if (Array.isArray(seed)) {
    seed.forEach((singleSeed) => plantsArr.push(singleSeed));
  } else {
    // Otherwise, push the single seed object
    plantsArr.push(seed);
  }
  return seed;
};

export const usePlants = () => {
  return plantsArr;
};
