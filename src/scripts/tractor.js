import { addPlant } from './field.js';
import { createSoybean } from './seeds/soybean.js';
import { createCorn } from './seeds/corn.js';
import { createSunflower } from './seeds/sunflower.js';
import { createAsparagus } from './seeds/asparagus.js';
import { createWheat } from './seeds/wheat.js';
import { createPotato } from './seeds/potato.js';

export const plantSeeds = (plantingPlan) => { 
    for (let i = 0; i < plantingPlan.length; i++){
        const row = plantingPlan[i];

        for (let j = 0; j < row.length; j++) {
            const seedType = row[j];
            
            if (seedType === "Soybean") {
                addPlant(createSoybean());
            } else if (seedType === "Corn") {
                addPlant(createCorn());
            } else if (seedType === "Sunflower") {
                addPlant(createSunflower());
            } else if (seedType === "Asparagus") {
                addPlant(createAsparagus());
            } else if (seedType === "Wheat") {
                addPlant(createWheat());
            } else if (seedType === "Potato") {
                addPlant(createPotato());
            }
        }
    }
};


