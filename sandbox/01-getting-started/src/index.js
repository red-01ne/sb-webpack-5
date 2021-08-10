import _ from "lodash";

function createElement() {
    const element = document.createElement("h1");

    element.innerHTML = _.join(["Hello", "webpack"], " ");

    return element;
}

document.body.append(createElement());
