import _ from "lodash";
import print from "./print";

document.body.append(createMainHeader());

function createMainHeader() {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    const button = document.createElement("button");

    h1.innerHTML = _.join(["bundle", "your", "assets"], " ");
    button.innerHTML = "Click me and check the console!";
    button.addEventListener("click", print);

    header.append(h1);
    header.append(button)

    return header;
}
