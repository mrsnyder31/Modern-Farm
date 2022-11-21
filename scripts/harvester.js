/**
 * harvestPlants takes in an array of plants ()
 * hPf needs to interate an array
 * copy the object as many times as object.output in the returned array
 * only half of the corn output needs to be added to the return array
 * hP function will return an array of seed objects
 * 
 */

 
export const harvestPlants = (plantsArray) => {
    let harvest = []
    for (const plant of plantsArray) {
        if (plant.type === 'Corn') {
            for (let i = 0; i < plant.output / 2; i++){
                harvest.push(plant)
            }
        }
        else {
            for (let i = 0; i < plant.output; i++){
                harvest.push(plant)
            }
        }   

    }

    return harvest
}





