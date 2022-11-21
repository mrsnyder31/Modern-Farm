//import { plantSeeds } from './tractor.js'

let initalFieldArray = []
/**
 * addPlant() takes in an array and checks if the array has any nested arrays
 * if a nested array exist move its individual elements into the new array
 */
export const addPlant = (seed) => {

    if (Array.isArray(seed)){
        for (let i = 0; i < seed.length; i++) {
            initalFieldArray.push(seed[i])
        }
    } else {
        initalFieldArray.push(seed)
    }

}

export const usePlants = () => {
    let newFieldArray = [...initalFieldArray]

    return newFieldArray
}


//  console.log(usePlants())
//  console.log(initalFieldArray)
   