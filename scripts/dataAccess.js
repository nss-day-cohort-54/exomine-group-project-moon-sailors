import { database } from "./database.js"



export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
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

