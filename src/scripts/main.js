import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
import { usePlants, addPlant } from "./field.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createCorn } from "./seeds/corn.js";
import { createSoybean } from "./seeds/soybean.js";
import { createWheat } from "./seeds/wheat.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
const yearlyPlan = createPlan();
console.log(yearlyPlan);

plantSeeds(yearlyPlan);

const sunflowerSeed = createSunflower();
addPlant(sunflowerSeed);
const wheatSeed = createWheat();
addPlant(wheatSeed);
const cornSeeds = createCorn();
addPlant(cornSeeds);
const soybeanSeeds = createSoybean();
addPlant(soybeanSeeds);
const asparagusSeed = createAsparagus();
addPlant(asparagusSeed);
const potatoSeed = createPotato();
addPlant(potatoSeed);

const plants = usePlants();
console.log(plants);
