import { getMineralFacilities, getFacilities, transientState } from "./dataAccess.js"


const mineralFacilitiesArray = getMineralFacilities()
const state = transientState()
const facilities = getFacilities()







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



//document.addEventListener("facilitySelected", customEvent => {

/*

const facilityMatch = (facilityObject) => {
    if (facilityObject.id === mineralFacilitiesArray.facilityId) {
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






const currentFacilityMinerals = () => {
    const filteredFacility = facilityMineralContent()

    for (const facility of facilities) {
        if (facility.id === state.selectedFacility === filteredFacility.facilityId) {
            return contentTarget.innerHTML =
            `
        <h2> 
        Facility Minerals for ${facility.name}
        </h2>`
        }

    }

}




export const FacilityHeader = () => {
    document.addEventListener("facilitySelected", customEvent => {
       return contentTarget.innerHTML =
        `
    <h2> 
    Facility Minerals
    </h2>`  
    })
    currentFacilityMinerals()

}

*/

