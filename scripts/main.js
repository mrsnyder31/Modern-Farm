/* import {  } from ''

const variable = function 
console.log(function)*/
console.log("Welcome to the main module")
//
import { createPlan } from './plan.js'
import { plantSeeds } from './tractor.js';
import { usePlants } from './field.js'
import { createCorn } from "./seeds/corn.js"
import { addPlant } from './field.js'
import { harvestPlants } from './harvester.js';
import { Catalog } from './catalog.js';

//
const yearlyPlan = createPlan();
// console.log(yearlyPlan)
//

const cornSeed = createCorn()
// console.log(cornSeed)
//

// const newPlant = addPlant(cornSeed);
// console.log(newPlant)
//
const seedsToPlant = plantSeeds(yearlyPlan)
// console.log(seedsToPlant)


//
const usedPlant = usePlants();
// console.log(usedPlant)
//

const harvestedPlants = harvestPlants(usedPlant) 
console.log(harvestedPlants)

const plantsHtml = Catalog(harvestedPlants);
console.log(plantsHtml)

let parentHTMLElement = document.querySelector(".messages")

parentHTMLElement.innerHTML = Catalog(harvestedPlants);