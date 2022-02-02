import { purchaseMineral } from "./dataAccess.js"
/*
import { Governor } from "./governors.js"
import { Facility } from "./facilites.js"
import { FacilityMinerals } from "./mineralFacilites.js"
import { Sales } from "./sales.js"
import { Cart } from "./cart.js"
*/

import { Governors } from "./governors.js"
import { Facilities } from "./facilites.js"

document.addEventListener("click", (event) => {
    if (event.target.id === "purchase") {
        const purchase = purchaseMineral()
    }
})

export const Exomine = () => {
    return `
    <header class="header">
        <h1 class='title'>Solar System Mining Marketplace</h1>
    </header>
    <article class="choices">
        <section class="governor">
            <p>Choose a Governor<p>
            ${Governors()}
        </section>
        <section class='choices_facility options'>
            <h2>Choose a facility<h2>
           ${Facilities()}
        </section>
        <section class="colonyOrders>
            
        </section>
        <section class="choices_minerals options">
            
        </section>
        <section class="cart">
            <h2>Space Cart<h2>
            
            <button id='purchase'>Purchase Mineral</button>
        </section>
    </article>
    `
}