import { setFacility, getFacilities } from "./dataAccess.js"

//import setFacility and store in a new variable 

const facilityArray = getFacilities()
// add transientState



// establish a function that will generate a facility dropdown in HTML after governer is chosen
export const Facilities = () => {

    let html = "<h2></h2>"

    // put this in an if() on line 20
        html += '<select id="facility" disabled name="facility" >'
        html += '<option value= "0">Select a Facility</option>'
    
        //to get the facility options we neeed to map through the aray of facilities to find the active ones 
        const arrayOfOptions = facilityArray.map((facility) => {
            if (facility.activeStatus === true)
                return `<option class="select" value= "${facility.id}"> ${facility.name}</option>`
    
        } )



    //this appends each option to one list 
    html+= arrayOfOptions.join("")
    html += "</select>"
    return html 

}

document.addEventListener(
    "governorSelected",
    (event) => {
        document.querySelector("#facility").disabled = false
    }
)

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "facility") {
            setFacility(parseInt(event.target.value))
        }
    }
)