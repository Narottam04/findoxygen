import drive from "./drive-db.js";
import List from "list.js";

const OPTIONS = {
    valueNames: ["city"],
};

async function addListingsFromDrive(id, table) {
    const listings = await drive(id);
    const tbody = table.querySelector("tbody");
    tbody.firstElementChild.remove();

    const frag = document.createDocumentFragment();

    for (const row of listings) {
        frag.append(toRow(row));
    }

    tbody.append(frag);
}

function toRow(obj) {
    const row = document.createElement("tr");

    row.append(toCell("company font-mont", obj.companyname));
    row.append(toCell("person font-mont", obj.personname));
    row.append(toCell("contact font-mont", obj.contactnumber));
    row.append(toCell("city font-mont", obj.city));

    return row;
}

function toCell(className, text) {
    const cell = document.createElement("td");
    cell.className = className;
    cell.appendChild(document.createTextNode(text));
    return cell;
}

let userList;

window.addEventListener("load", () => {
    const main = document.querySelector("main");
    const table = main.querySelector("table");
    const id = table.dataset.drive;

    addListingsFromDrive(id, table)
        .then(() => {
            userList = new List(main, OPTIONS);
        })
        .catch(console.error);
});
