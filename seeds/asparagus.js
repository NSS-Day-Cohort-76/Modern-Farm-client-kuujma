const createAsparagus = () => {
    return {
      type: 'asparagus',
      height: 24,
      output: 4,
    };
  };
  
  const asparagusSeed = createAsparagus()
  console.log(asparagusSeed)
  module.exports = createAsparagus;
