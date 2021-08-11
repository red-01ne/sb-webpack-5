import _ from "lodash";

import "./main.css";

import logoSrc from "./assets/logo.png";

import XMLData from "./data/data.xml";
import CSVData from "./data/data.csv";
import TOMLData from "./data/data.toml";
import YAMLData from "./data/data.yaml";
import JSON5Data from "./data/data.json5"

document.body.append(createMainHeader());

console.log(createLogDelimiterString("LOADING DATA", 100));
[XMLData, CSVData].forEach(console.log);

console.log(createLogDelimiterString("CUSTOM PARSE OF JSON DATA", 100));
console.log(TOMLData.title);
console.log(TOMLData.owner.name);
console.log(YAMLData.title);
console.log(YAMLData.owner.name);
console.log(JSON5Data.title);
console.log(JSON5Data.owner.name);

function createMainHeader() {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    const logo = new Image();

    header.classList.add("main-header");
    h1.innerHTML = _.join(["bundle", "your", "assets"], " ");
    logo.src = logoSrc;

    header.append(h1);
    header.append(logo);

    return header;
}

function createLogDelimiterString(message, delimiterStringLength = 40) {
    if (typeof message !== "string" || typeof delimiterStringLength !== "number") return;

    message = message.trim();

    if (delimiterStringLength < message.length + 4) return message;

    if (delimiterStringLength === message.length + 4) {
        return `< ${message} >`;
    }

    return `<${"-".repeat(Math.floor((delimiterStringLength - message.length) / 2))} ${message} ${"-".repeat(Math.ceil((delimiterStringLength - message.length) / 2))}>`;
}
