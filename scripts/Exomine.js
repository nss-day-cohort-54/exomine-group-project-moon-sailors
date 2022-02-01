import { addPurchase } from "./dataAccess.js"
import { Governor } from "./governors.js"
import { Facility } from "./facilites.js"
import { FacilityMinerals } from "./mineralFacilites.js"
import { Sales } from "./sales.js"
import { Cart } from "./cart.js"


document.addEventListener("click", (event) => {
    if (event.targget.id === "purchase") {
        const purchase = addPurchase()
    }
})

export const Exomine = () => {
    return `
    <header class="header">
        <h1 class='title'>Solar System Mining Marketplace</h1>
    </header>
    <article class="choices">
        <section class="choices_governor options">
            <h2>Choose a governor<h2>
            ${Governor()}
        </section>
        <section class='choices_facility options'>
            <h2>Choose a facility<h2>
            ${Facility()}
        </section>
        <section class="colonyOrders>
            ${Sales()}
        </section>
        <section class="choices_minerals options">
            ${FacilityMinerals()}
        </section>
        <section class="cart>
            <h2>Space Cart<h2>
            ${Cart()}
            <button id='purchase'>Purchase Mineral</button>
        </section>
    </article>
    `
}