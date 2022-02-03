import { getMineralFacilities, getFacilities, transientState, getMinerals } from "./dataAccess.js"


const mineralFacilitiesArray = getMineralFacilities()
const state = transientState()
const facilities = getFacilities()
const minerals = getMinerals()







export const FacilityHeader = () => {

    let html = ""


    if (state.selectedFacility === undefined) {
        html = `<h2>
                Facility Minerals
                </h2>`
    } else {
        for (const facility of facilities) {
            if (facility.id === state.selectedFacility) {
                html = `<h2>
                        Facility Minerals for ${facility.name}
                        </h2>`
            }

        }


    }




    return html


}

//make function that displays current amount of minerals for selected facility
export const facilityStock = () => {
    let html = `<ul>`
    const mineralContents = facilityMineralContent()
    for (const mineral of minerals) {
        for (const mineralContent of mineralContents) {
            if (mineralContent.mineralId === mineral.id) {
                html += `<li><input type="radio" name="mineral" value="${mineral.id}"/> ${mineralContent.mineralAmount} tons of ${mineral.name}
                        </li>`
            }
        }
    } html += `</ul>`
    return html


}


//radio selection of minerals at selected facilty



//document.addEventListener("facilitySelected", customEvent => {



const facilityMatch = (facilityObject) => {
    if (state.selectedFacility === facilityObject.facilityId) {
        return true
    }
    return false
}

//Filter the array of facility minerals on the facilityId foreign key as the first step. 
//It should match the id of the facility chosen by the user.
export const facilityMineralContent = () => {
    const filteredFacilityMinerals = mineralFacilitiesArray.filter(facilityMatch)

    return filteredFacilityMinerals
}




//This creates the header for the Facility Mineral container









