import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { createSoybean } from "./seeds/soybean.js";
import { addPlant, usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";

// checking all the create Seeds, had to change a bit in the seeds files
const asparagusSeed = createAsparagus();
console.log(asparagusSeed);
const cornSeed = createCorn();
console.log(cornSeed);
const potatoSeed = createPotato();
console.log(potatoSeed);
const sunFlowerSeed = createSunflower();
console.log(sunFlowerSeed);
const wheatSeed = createWheat();
console.log(wheatSeed);
const soyBeanSeed = createSoybean();
console.log(soyBeanSeed);

addPlant(cornSeed);
addPlant(potatoSeed);
console.log("plants in the field", usePlants());

const yearlyPlan = createPlan();
console.log("yearly plan:", yearlyPlan);

plantSeeds(yearlyPlan);

console.log("final plants in field:", usePlants());
