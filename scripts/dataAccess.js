import { database } from "./database.js"



export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
  //  document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setGovernor = (governorId) => {
    database.transientState.selectedGovernor = governorId
//    document.dispatchEvent( new CustomEvent("stateChanged") )
    document.dispatchEvent( new CustomEvent("governorSelected") )
}

export const transientState = () => {
    return database.transientState
}



export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}

export const getMineralFacilities = () => {
    return database.mineralFacilities.map(mF => ({...mF}))
}


//this function is responsibile for returning a copy of the governors array from the database 
export const getGovernors = () => {
    return database.governors.map(governor => ({...governor}))
}
export const purchaseMineral = () => {
        const newPurchase = {...database.transientState}
        const lastIndex = database.colonyMinerals.length
        newPurchase.id = lastIndex + 1
        database.colonyMinerals.push(newPurchase)
        database.transientState = {}
        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
}

