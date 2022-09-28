import { data } from "./data.js";

const body = document.getElementById("tableDiv");
const table = document.createElement("table");

data.forEach((e) => {
    const tr = table.insertRow();
    e.forEach((el)=>{
        const td = tr.insertCell();
        td.appendChild(document.createTextNode(el));
    })
})

body.appendChild(table);
