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

    row.append(toCell("company", obj.companyname));
    row.append(toCell("person", obj.personname));
    row.append(toCell("contact", obj.contactnumber));
    row.append(toCell("city", obj.city));

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


// navbar
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-ul");
    const navLinks = document.querySelectorAll(".nav-ul li");

    // toggle nav
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        // hamburger animation
        burger.classList.toggle("toggle");
        // link animation
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
                    }s`;
            }
        });
    });
};

navSlide();
