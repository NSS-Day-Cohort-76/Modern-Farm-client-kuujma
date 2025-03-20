import {plantSeeds} from "./tractor.js"

export const harvestPlants = (plants) => {
    let seedObjs = []
    for (const plant of plants) {
        if (plant.type === "corn") {
        let cornOutput = plant.output / 2
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