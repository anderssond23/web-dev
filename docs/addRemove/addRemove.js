let optionsList = ["thing1", "thing2", "thing3", "thing4"];
let chosenList = [];
let optionsEl = document.querySelector("#options");
let chosenEl = document.querySelector("#chosen")
for (let el of optionsList) {
    let listItem = document.createElement("li");
    listItem.textContent = el;
    listItem.onClick = () => {console.log("should highlight")
}
    optionsEl.appendChild(listItem);
}
function addChosenItem(name){
for (let el of chosenList) {
    let listItem =document.createElement("li");
    listItem.textContent = name;
    chosenEl.appendChild(listItem);
}
}
function addOption(name){
    for (let el of optionsList) {
        let listItem =document.createElement("li");
        listItem.textContent = name;
        optionsEl.appendChild(listItem);
    }
}
function removeFromOptions(index){
    optionsEl.removeChild(optionsEl.childNodes[index+1])
}
function removeFromChosen(index){
    optionsEl.removeChild(chosenEl.childNodes[index+1])
}
let addButt = document.querySelector("#addButton");
let remButt = document.querySelector("#removeButton");

function moveToOptions(index){
    chosenList.push(optionsList[index]);
    optionsList.splice(index,1);
    console.log(optionsList);
    console.log(chosenList);
    addChosenItem(optionsList[index]);
    removeFromOptions(index);
}

addButt.onClick = () => { 
    moveToOptions(1)
    console.log("should add");
};
remButt.onClick = () => { console.log("should remove");
};