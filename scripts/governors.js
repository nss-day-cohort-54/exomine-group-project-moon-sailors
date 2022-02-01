import { getGovernors, setGovernor } from "./dataAccess.js";

//import getGovernors and store in a new variable 
const governorsArray = getGovernors()


// establish a function that will generate a dropdown in the html
export const Governors = () => {
    let html = "<h2></h2>"

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

}


