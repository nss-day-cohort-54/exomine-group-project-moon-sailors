import { getMineralFacilites } from "./dataAccess.js"


const mineralFacilitiesArray = getMineralFacilites()

//Filter the array of facility minerals on the facilityId foreign key as the first step. 
export const facilityMineralContent = () => {
    const filteredFacilityMinerals = mineralFacilitiesArray.filter(facilityId)

    return filteredFacilityMinerals
}
//It should match the id of the facility chosen by the user.