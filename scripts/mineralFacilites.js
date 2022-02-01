import { getMineralFacilites } from "./dataAccess.js"


const mineralFacilitiesArray = getMineralFacilites()


const facilityMatch = (facilityObject) => {
    if (facilityObject.id === facilityId) {
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


