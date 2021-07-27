// module to hold information related to kids and render this information to the DOM

import { getHomes, getKidHomeAssignments, getKids, getServices } from "./database.js";

const kids = getKids()
const homes = getHomes()
const services = getServices()
const kidHomeAssignments = getKidHomeAssignments()

const findAssignmentsForKid = (kidObject, kidHomeAssignmentsArray) => {
    let kidHomes = []
    for (const kidObject of homeArray) {
        for (const kidHomeAssignmentObject of kidHomeAssignmentsArray) {
        if (kidObject.id === kidHomeAssignmentObject.kidId) {
            kidHomes.push(kidHomeAssignmentObject)
        }
        }
    }
    return kidHomes
}

const findServices = (servicesArray, homesArray) => {
    let serviceRendered = null
    for (const serviceObject of servicesArray) {
        for (const homeObject of homesArray) {
            if (serviceObject.id === homeObject.serviceId) {
                serviceRendered = serviceObject
        }
        }
    } return serviceRendered
}

const findHome = () => {
    
}


export const Kids = () => {
    let html = ""
    html = "<ul>"



    for (const kid of kids) {
        const assignments = findAssignmentsForKid(kid, kidHomeAssignments)
        const foundService = findServices(services, homes)
        for (const assignment of assignments) {

            html += `<li id="kid--${kid.id}">${kid.name} ${foundService.serviceType} at ${assignment.address}</li>`  
        }
    }
    html += "</ul"
    return html
}



