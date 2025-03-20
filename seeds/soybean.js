const createSoybean = () => {
    return {
      type: 'soybean',
      height: 20,
      output: 4,
    };
  };
  const soybeanSeed = createSoybean()
  console.log(soybeanSeed)
  module.exports = createSoybean;
