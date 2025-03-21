////////////////////////////////////////////////////
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
  if (Array.isArray(seed)) {
    for (const individualSeed of seed) {
      plantsArr.push(individualSeed);
    }
  } else {
    plantsArr.push(seed);
  }
  return seed;
};

export const usePlants = () => {
  return plantsArr;
};
