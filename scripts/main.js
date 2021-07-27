import { Kids } from "./kids.js";

const mainContainer = document.querySelector("#container")

const render = () => {
    mainContainer.innerHTML = Kids()
}

render()