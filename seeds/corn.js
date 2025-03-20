
const createCorn = () => {
    const cornSeed = {
      type: 'corn',
      height: 10,
      output: 5
    };
    return [cornSeed, cornSeed]; 
  };
  
  let cornTime = createCorn();
  
  console.log(cornTime);
  module.exports = createCorn;