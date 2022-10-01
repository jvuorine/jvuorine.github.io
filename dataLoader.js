import { data } from "./new_data.js";

const map = new Map();
map.set("organizer", "Järjestäjä");
map.set("name", "Tapahtuman nimi");
map.set("date", "Päivämäärä");
map.set("location", "Tapahtumapaikka");

const body = document.getElementById("tableDiv");
const table = document.createElement("table");

console.log(data)

data.forEach((e) => {
    const thead = table.appendChild(document.createElement("thead"));
    const tbody = table.appendChild(document.createElement("tbody"));
    const tr = tbody.insertRow();
    const trh = thead.insertRow();
    for(const [key, value] of Object.entries(e)){
        const td = tr.insertCell();
        const th = trh.insertCell();
        td.appendChild(document.createTextNode(value));
        th.appendChild(document.createTextNode(map.get(key)));
    }
})

body.appendChild(table);
