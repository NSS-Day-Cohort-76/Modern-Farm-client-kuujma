const createWheat = () => {
    return {
      type: 'wheat',
      height: 230,
      output: 6,
    };
  };
  const wheatSeed = createWheat()
  console.log(wheatSeed)
  module.exports = createWheat;
