const createPotato = () => {
    return {
      type: 'potato',
      height: 32,
      output: 2,
    };
  };
  const potatoSeed = createPotato()
  module.exports = createPotato;
