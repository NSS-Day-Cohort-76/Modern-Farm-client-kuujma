import { usePlants } from "./field.js";
import { harvestPlants } from "./harvester.js";

export const Catalog = () => {
    const plants = harvestPlants(usePlants())

    let catalogHTML = "";
    for (const plant of plants) {
        catalogHTML+= `
            <section class="container">
                <h2>${plant.type}</h2>
     
            </section>
        `;
    }
 return catalogHTML;
}


