import {plantSeeds} from "./tractor.js"

export const harvestPlants = (plants) => {
    let seedObjs = []
    for (const plant of plants) {
        if (plant.type === "Corn") {
        let cornOutput = plant.output / 2
        console.log(cornOutput)
            for (let i = 0; i < cornOutput; i++) {
                seedObjs.push({ type: plant.type, height: plant.height, output: plant.output})
            }
        } else {
        
        for (let i = 0; i < plant.output; i++) {
        seedObjs.push({type: plant.type, height: plant.height, output: plant.output})
    }
}
}
    return seedObjs
}


/* export const harvestPlants = (plants) => {
    const harvested = [];
    
    for (const plant of plants) {
      if (plant.type === "Corn") {
        // For each corn object, only harvest half its output
        const cornHarvest = Math.round(plant.output / 2);
        for (let i = 0; i < cornHarvest; i++) {
          harvested.push({
            type: plant.type,
            height: plant.height,
            output: plant.output
          });
        }
      } else {
        // For other plants, harvest as many items as the output indicates.
        for (let i = 0; i < plant.output; i++) {
          harvested.push({
            type: plant.type,
            height: plant.height,
            output: plant.output
          });
        }
      }
    }
    
    return harvested;
  };
  
  */