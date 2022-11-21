/**
 *  function should accept the harvested food array as input.
 * should iterate the array of food objects
 * <main> element should have its inner HTML appended with an HTML representation of a food item
 * exapmle: <section class="plant">Corn</section>
 */


 export const Catalog = (harvestedPlantsArray) => {
    let somethingsomething = ""
    for (const plant of harvestedPlantsArray) {
     somethingsomething += `<section class="plant">${plant.type}</section>\n`
    }
    return somethingsomething
 }

//  let parentHTMLElement = document.querySelector(".container")

//  parentHTMLElement.innerHTML = Catalog();
 