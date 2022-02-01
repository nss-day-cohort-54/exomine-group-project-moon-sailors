import { database } from "./database.js"



export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setGovernor = (governorId) => {
    database.transientState.selectedGovernor = governorId
    
}

export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}
//this function is responsibile for returning a copy of the governors array from the database 
export const getGovernors = () => {
    return database.governors.map(governor => ({...governor}))
}
export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
}

