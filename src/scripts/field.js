const plantsArr = [];

export const addPlant = (seed) => {
  // If the seed is an array (e.g., corn seeds), add each item individually
  if (Array.isArray(seed)) {
    seed.forEach(singleSeed => plantsArr.push(singleSeed));
  } else {
    // Otherwise, push the single seed object
    plantsArr.push(seed);
  }
  return seed;
};

export const usePlants = () => {
  return [...plantsArr];
};
