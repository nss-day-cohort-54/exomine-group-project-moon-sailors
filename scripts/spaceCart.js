//create click event on radio selection in mineralFacilities
//display "1 ton of ${currentMineralSelected"

import { transientState, getFacilities, getMineralFacilities, getMinerals, setMineral } from "./dataAccess.js"

const state = transientState()
const facilities = getFacilities()
const mineralFacilities = getMineralFacilities()
const minerals = getMinerals()

export const addToCart = () => {
    let html = `<h3 class="cartItem">`

    if (state.selectedMineral === undefined) {
        html += '</h3>'
    } else {

        for (const facility of facilities) {
                for (const mineral of minerals) {
                    if (state.selectedMineral === mineral.id &&
                        state.selectedFacility=== facility.id &&
                        facility.activeStatus === true 
                        ) {
                        html += `1 ton of ${mineral.name} from ${facility.name} </div>`
                    }
                }
            
        }
    } return html









}


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral") {
            setMineral(parseInt(event.target.value))
            
        }
    }
)

/*

let contentTarget = document.querySelector(".cart")


document.addEventListener("click",(clickEvent) => {
    if (clickEvent.target.name === "mineral") {
        setMineral(parseInt(clickEvent.target.value))
        const cart = addToCart()
        contentTarget.innerHTML = cart
    }
})

*/