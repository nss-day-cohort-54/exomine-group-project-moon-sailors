import { setFacility, getFacilities, transientState } from "./dataAccess.js"

//import setFacility and store in a new variable 

const facilityArray = getFacilities()
// add transientState
const state = transientState()


/*
*/
document.addEventListener(
    "governorSelected",
    (event) => {
        document.querySelector("#facility").disabled = false
    }
)
// establish a function that will generate a facility dropdown in HTML after governer is chosen
export const Facilities = () => {

    let html = "<h2></h2>"

    // put this in an if() on line 20


    if (state.selectedGovernor === undefined) {
        html += '<select id="facility" disabled name="facility" >'
    } else {
        //to get the facility options we neeed to map through the aray of facilities to find the active ones 
        html += '<select id="facility" name="facility" >'
    }
    
    
    html += '<option value= "0">Select a Facility</option>'
    const arrayOfOptions = facilityArray.map((facility) => {
        if (facility.activeStatus === true && state.selectedFacility === facility.id) {
            return `<option selected class="select" value= "${facility.id}"> ${facility.name}</option>`
        } else if (facility.activeStatus === true) {
            return `<option class="select" value="${facility.id}">${facility.name}</option>`
        }})
    //this appends each option to one list 
    html += arrayOfOptions.join("")
    
    
    html += "</select>"
    return html



}


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "facility") {
            setFacility(parseInt(event.target.value))
        }
    }
)