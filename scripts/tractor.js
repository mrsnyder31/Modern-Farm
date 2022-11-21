/**
 * create a function that takes an array as an argument
 * function must iteratte through the parent and child array
 * invokke the corresponding function for each item in the array. ie createCorn() for "corn"
 * move the newly cxreated seed to the array in the fields module
 * 
 */

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { addPlant } from './field.js'


// let plantingPlan = [
//     ["Potato", "Soybean", "Soybean", "Corn"],
//     ["Wheat", "Corn", "Wheat", "Asparagus"],
//     ["Asparagus", "Wheat", "Soybean", "Corn"],
//     ["Asparagus", "Soybean", "Potato", "Wheat"]
// ];

// 

export const plantSeeds = (plantingPlan) => {
    for (let i = 0; i < plantingPlan.length; i++) { 
        for (let x = 0; x < plantingPlan[i].length; x++) { 
        if (plantingPlan[i][x] === "Asparagus") {
                addPlant(createAsparagus())
                }
        if (plantingPlan[i][x] === "Corn") {
                addPlant(createCorn())
                }
        if (plantingPlan[i][x] === "Potato") {
                addPlant(createPotato())
                }
        if (plantingPlan[i][x] === "Soybean") {
                addPlant(createSoybean())
                }
        if (plantingPlan[i][x] === "Sunflower") {
                 addPlant(createSunflower())
                }
        if (plantingPlan[i][x] === "Wheat") {
                addPlant(createWheat())
                }
        }
    
    }
}