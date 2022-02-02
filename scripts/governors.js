import { getGovernors, setGovernor, transientState } from "./dataAccess.js";

//import getGovernors and store in a new variable 
const governorsArray = getGovernors()
const state = transientState()



// establish a function that will generate a dropdown in the html
export const Governors = () => {
    let html = "<h2></h2>"

    html += '<select name="governor" >'

    html += '<option value= "0"> Select a Governor </option>'
    
        //to get the governor options we neeed to map through the aray of governors to find the active ones 
        const arrayOfOptions = governorsArray.map((governor) => {
            if (governor.activeStatus === true && state.selectedGovernor === governor.id) {
                return `<option selected class="select" value= "${governor.id}"> ${governor.name}</option>`
            } else if (governor.activeStatus === true) {
                return `<option class="select" value= "${governor.id}"> ${governor.name}</option>`
        }
        }
        )
        //this appends each option to one list 
        html+= arrayOfOptions.join("")
        html += "</select>"
        return html 

    

}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "governor") {
            setGovernor(parseInt(event.target.value))
        }
    }
)

/*
html += '<select name="governor" >'

html += '<option value= "0"> Select a Governor </option>'

    //to get the governor options we neeed to map through the aray of governors to find the active ones 
    const arrayOfOptions = governorsArray.map((governor) => {
        if (governor.activeStatus === true)
            return `<option class="select" value= "${governor.id}"> ${governor.name}</option>`

    }
    )
    //this appends each option to one list 
    html+= arrayOfOptions.join("")
    html += "</select>"
    return html 
*/