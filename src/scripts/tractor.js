import { usePlants, } from './fields.js';

/*
[
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"],
    ["Asparagus", "Soybean", "Potato", "Wheat"]
]
    */

export const plantSeeds = (plantingPlan) => { 
    for (let i=0; i < plantingPlan.length; i++){
        const row = plantingPlan[i]

        for (let j=0; j < row.length; j++) {
            const seedType = row[j]
            
            if ( seedType === "Soybean") {
                addPlants.push(createSoybean())
            }
            if (seedType === "Corn") {
                addPlants.push(createCorn())
            }
            if (seedType === "Sunflower") {
                addPlants.push(createSunFlower())
            }
            if (seedType === "Asparagus") {
                addPlants.push(createAsparagus())
            }
            if (seedType === "Wheat") {
                addPlants.push(createWheat())
            }
            if (seedType === "Potato") {
                addPlants.push(createPotato())
            }
   

        }
  }
}

