import { database } from "./database.js"

export const getMinerals = () => {
    return database.minerals.map(mineral => ({ ...mineral }))
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent(new CustomEvent("stateChanged"))
    document.dispatchEvent(new CustomEvent("facilitySelected"))
}


export const setGovernor = (governorId) => {
    database.transientState.selectedGovernor = governorId
    document.dispatchEvent(new CustomEvent("stateChanged"))
    document.dispatchEvent(new CustomEvent("governorSelected"))
}

export const setMineralFacility = (mineralFacilityId) => {
    database.transientState.selectedMineralFacility = mineralFacilityId
    document.dispatchEvent(new CustomEvent("stateChanged"))
    document.dispatchEvent(new CustomEvent("mineralFacilitySelected"))
}

export const setMineral = (mineralId) => {
    database.transientState.selectedMineral = mineralId
    document.dispatchEvent(new CustomEvent("stateChanged"))
    document.dispatchEvent(new CustomEvent("mineralSelected"))
}
export const setMineralAmount = () => {
    database.transientState.mineralAmount = mineralAmountId
    document.dispatchEvent(new CustomEvent("stateChanged"))
    document.dispatchEvent(new CustomEvent("mineralSelected"))
}
export const transientState = () => {
    return database.transientState
}



export const getFacilities = () => {
    return database.facilities.map(f => ({ ...f }))
}

export const getMineralFacilities = () => {
    return database.mineralFacilities.map(mF => ({ ...mF }))
}



//this function is responsibile for returning a copy of the governors array from the database 
export const getGovernors = () => {
    return database.governors.map(governor => ({ ...governor }))
}
export const getColonies = () => {
    return database.colonies.map(colony => ({ ...colony }))
}
export const getColonyMinerals = () => {
    return database.colonyMinerals.map(colonyMineral => ({ ...colonyMineral }))
}

export const purchaseMineral = () => {
    let state = database.transientState
    const colonies = getColonies()
    const facilities = getFacilities()
    const colonyMinerals = getColonyMinerals()
    const governors = getGovernors()
    const mineralFacilities = getMineralFacilities()
    const purchasedMinerals = state.selectedMineral
    const chosenGovernor = state.selectedGovernor
    if (state.selectedMineral) {
        //This filters through the mineral facilities to show minerals at the selected facility 
        const facilityMineralStock = mineralFacilities.filter(mineralFacility => mineralFacility.facilityId === state.selectedFacility)
        const facilityMineralSelected = facilityMineralStock.find(mineralFacility => mineralFacility.mineralId === purchasedMinerals)
        const chosenMineralFacilityId = facilityMineralSelected.id

        const governorSelected = governors.find(governor => governor.id === chosenGovernor)
        const colonySelected = colonies.find(colony => colony.id === governorSelected.colonyId)
        const colonyMineralSelected = colonyMinerals.find(colonyMineral => colonySelected.id === colonyMineral.colonyId)
        setFacilityAmount(facilityMineralSelected,purchasedMinerals)
        setcolonyAmount(colonyMineralSelected,purchasedMinerals)
    }


    state.selectedMineral = undefined
    // Broadcast custom event to entire documement so that the
    // application can re-render and update state
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


const setFacilityAmount = (mineralFacilityObj, selectedMineralObj) => {
    const originalMineralFacilityObj = database.mineralFacilities.find(mineralFacility =>
        mineralFacility.id === mineralFacilityObj.id )
        
    originalMineralFacilityObj.mineralAmount--}
        



const setcolonyAmount = (colonyMineralObj,selectedMineralObj) => {
    const originalColonyMineralObj = database.colonyMinerals.find(colonyMineral =>
        selectedMineralObj===colonyMineral.mineralId && colonyMineralObj.colonyId=== colonyMineral.colonyId)
    originalColonyMineralObj.amount++

}


