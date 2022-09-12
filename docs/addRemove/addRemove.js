let optionsList = ["thing1", "thing2", "thing3", "thing4"];
let chosenList = ["fake"];
let optionsEl = document.querySelector("#options");
let chosenEl = document.querySelector("#chosen")
for (let el of optionsList) {
    let listItem = document.createElement("li");
    listItem.textContent = el;
    optionsEl.appendChild(listItem);
}
for (let el of chosenList) {
    let listItem =document.createElement("li");
    listItem.textContent = el;
    chosenEl.appendChild(listItem);
}
let addButt = document.querySelector("#addButton");
let remButt = document.querySelector("#removeButton");

addButt.onClick = () => { console.log("should add");
};
remButt.onClick = () => { console.log("should remove");
};