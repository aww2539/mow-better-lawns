// module to hold information related to kids and render this information to the DOM

import { getHomes, getKidHomeAssignments, getKids, getServices } from "./database.js";

const kids = getKids()
const homes = getHomes()
const services = getServices()
const kidHomeAssignments = getKidHomeAssignments()

export const Kids = () => {
    let html = ""
    html = "<ul>"
    for (const kid of kids) {
        html += `<li id=kid--${kid.id}>${kid.name}</li>`
    }
    html += "</ul"
    return html
}
