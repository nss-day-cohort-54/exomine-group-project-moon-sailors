import { getColonyMinerals, getColonies, getGovernors, transientState, getMinerals } from "./dataAccess.js";


//import governors and colonies to be matched
//import transient state to track selections 
const colonies = getColonies()
const governors = getGovernors()
const minerals = getMinerals()

// this function is responsible for rendering the stock of minerals per colony based on the gov selected. 
const transient = transientState()
const cMinerals = getColonyMinerals()


export const colonyMinerals = () => {


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

    let html = "<ul>"

    const colonyContents = colonyMineralContent()
    for (const mineral of minerals) {
        for (const colonyContent of colonyContents) {
            for (const colonyMineral of cMinerals) {
                if (colonyContent.id === colonyMineral.colonyId) {
                    html += `<li
                 name="mineralCount" value="${mineral.id}" /> ${colonyMineral.amount} tons of ${mineral.name}
                     </li>`

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


const colonyMatch = (colonyObj) => {
    for (const governor of governors) {
        if (transient.selectedGovernor === governor.id) {
            for (const colony of colonies) {
                if (governor.colonyId === colony.id) {
                    return true
                }
                return false
            }
        }
    }

}
//if the gov selected has a colony id that matches and colony match up filter so we only get the 
const colonyMineralContent = () => {
    const filteredColonyMinerals = colonies.filter(colonyMatch)
    return filteredColonyMinerals
}