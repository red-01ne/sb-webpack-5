import "./styles.css";
import _ from "lodash";
import print from "./print";
import generateException from "./generate-exception"

document.body.append(createMainHeader());

function createMainHeader() {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    const printButton = document.createElement("button");
    const exceptionButton = document.createElement("button");

    h1.innerHTML = _.join(["bundle", "your", "assets"], " ");
    printButton.innerHTML = "Click me and check the console!";
    printButton.addEventListener("click", print);
    exceptionButton.innerHTML = "Click me to generate an exception (error)!";
    exceptionButton.addEventListener("click", generateException.bind(null, "generated exception"));

    header.append(h1);
    header.append(printButton);
    header.append(exceptionButton);

    return header;
}
