import { data } from "./data.js";

const body = document.getElementById("tableDiv");
const table = document.createElement("table");

console.log(data)

data.forEach((e) => {
    const tr = table.insertRow();
    const td = tr.insertCell();
    td.appendChild(document.createTextNode(e.organizer));
    td.appendChild(document.createTextNode(e.name));
    td.appendChild(document.createTextNode(e.date));
    td.appendChild(document.createTextNode(e.location));
})

body.appendChild(table);
