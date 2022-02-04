import { getMineralFacilities, getFacilities, transientState, getMinerals, setMineralFacility, setMineral } from "./dataAccess.js"









export const FacilityHeader = () => {
    const state = transientState()
    const facilities = getFacilities()
    
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
    const state = transientState()
const minerals=getMinerals()
const facilities = getFacilities()
const mineralFacilitiesArray = getMineralFacilities()

    let html = `<ul>`
    const mineralContents = facilityMineralContent()
    for (const mineral of minerals) {
        for (const mineralContent of mineralContents) {
            if (mineralContent.mineralId === mineral.id && state.selectedMineral === mineralContent.mineralId) {
                html += `<li><input type="radio" id="mineral--${mineral.id}" checked name="mineral" value="${mineral.id}"/> ${mineralContent.mineralAmount} tons of ${mineral.name}
                        </li>`
            } else if (mineralContent.mineralId === mineral.id) {
                html += `<li><input type="radio" id="mineral--${mineral.id}" name="mineral" value="${mineral.id}"/> ${mineralContent.mineralAmount} tons of ${mineral.name}
                        </li>`
            }
        }
    } html += `</ul>`
    return html


}


//radio selection of minerals at selected facilty



//document.addEventListener("facilitySelected", customEvent => {



const facilityMatch = (facilityObject) => {
    const state = transientState()

    if (state.selectedFacility === facilityObject.facilityId) {
        return true
    }
    return false
}

//Filter the array of facility minerals on the facilityId foreign key as the first step. 
//It should match the id of the facility chosen by the user.
export const facilityMineralContent = () => {
    const mineralFacilitiesArray = getMineralFacilities()

    const filteredFacilityMinerals = mineralFacilitiesArray.filter(facilityMatch)

    return filteredFacilityMinerals
}




//This creates the header for the Facility Mineral container


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "facility") {
            setMineralFacility(parseInt(event.target.value))
        }
    }
)





