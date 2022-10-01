import { data } from "./new_data.js";

const map = new Map();
map.set("organizer", "Järjestäjä");
map.set("name", "Tapahtuman nimi");
map.set("date", "Päivämäärä");
map.set("location", "Tapahtumapaikka");

const body = document.getElementById("tableDiv");
const table = document.createElement("table");

console.log(data)
const thead = table.appendChild(document.createElement("thead"));
const trh = thead.insertRow();
map.forEach((item) =>{
    console.log(item);
    const th = trh.insertCell();
    th.appendChild(document.createTextNode(item));
    th.className = "title";
})
data.forEach((e) => {
    const tbody = table.appendChild(document.createElement("tbody"));
    const tr = tbody.insertRow();
    for(const [key, value] of Object.entries(e)){
        const td = tr.insertCell();
        td.appendChild(document.createTextNode(value));
    }
})

body.appendChild(table);
