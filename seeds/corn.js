
const createCorn = () => {
    const cornSeed = {
      type: 'corn',
      height: 10,
      output: 5
    };
    return [cornSeed, cornSeed]; 
  };
  
  let cornTime = createCorn();
  
  module.exports = createCorn;