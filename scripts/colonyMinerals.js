import { getColonyMinerals, getColonies, getGovernors, transientState, getMinerals } from "./dataAccess.js";


//import governors and colonies to be matched
//import transient state to track selections 
const colonies = getColonies()
const governors = getGovernors()
const minerals = getMinerals()

// this function is responsible for rendering the stock of minerals per colony based on the gov selected. 


export const colonyMinerals = () => {
    const transient = transientState()


    let htmlHeader = "<h2>Colony Minerals</h2>"

    for (const governor of governors) {
        if (transient.selectedGovernor === governor.id) {
            for (const colony of colonies) {
                if (governor.colonyId === colony.id) {
                    htmlHeader = `<h2>${colony.name} Minerals</h2>`
                }
            }
        }
    }

    return htmlHeader

}


export const governorStock = () => {
    const transient = transientState()
    const cMinerals = getColonyMinerals()

    let html = "<ul>"
    for (const mineral of minerals) {
        for (const colony of colonies) {
            for (const governor of governors) {
                for (const cMineral of cMinerals) {
                    if (transient.selectedGovernor === governor.id &&
                        governor.colonyId === colony.id &&
                        colony.id === cMineral.colonyId &&
                        cMineral.mineralId === mineral.id
                        && cMineral.amount > 0
                    ) {
                        html += `<li value="${mineral.id}">${cMineral.amount} tons of ${mineral.name}</li>`
                    }
                }
            }
        }
    }
    html += "</ul>"
    return html
}
// export const colMineralCount = () => {
//     let html = ""
//     html += "<ul>"

//     const colonyContents = colonyMineralContent()
//     for (const colMineral of cMinerals) {
//         for (const governor of governors) {

//             if (colMineral.colonyId === governor.colonyId) {
//                 for (const colonyContent of colonyContents) {
//                     if (colonyContent.id === colMineral.colonyId) {
//                         for (const mineral of minerals) {

// html += `<li
//                  name="mineralCount" value="${mineral.id}" /> ${colMineral.amount} tons of ${mineral.name}
//                      </li>`
//                         }
//                     }
//                 }

//             }
//         }
//     }



//     html += "</ul>"
//     return html
// }

