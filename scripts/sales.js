// This module is responsible for storing the permanent state

import { getColonyMinerals, getMinerals, transientState } from "./dataAccess.js";
// write a function that displays permanent state into html 
export const permanentState = () => {
    const colonyMinerals = getColonyMinerals()
    let html = "<ul>"

    const colonyStock = colonyMinerals.map(mineralsPurchased)
    html += colonyStock.join("")
    html += "</ul>"
    return html
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

const state= transientState()
const mineralsPurchased = (order) => {
    const minerals = getMinerals()
let html=""
    let totalAmount = 0
    for (const mineral of minerals) {

        if (state.selectedMineral === mineral.id) {

             html += ` <li>
            ${totalAmount} tons of ${mineral.name} 
            </li>
            `

        }

        
    }
    return html
    //import transient state
}
    //set it to HTML