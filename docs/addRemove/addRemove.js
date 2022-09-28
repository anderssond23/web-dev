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


function moveToOptions(index){
    chosenList.push(optionsList[index]);
    optionsList.splice(index,1);
    console.log(optionsList);
    console.log(chosenList);
    addChosenItem(optionsList[index]);
    removeFromOptions(index);
}

function moveToChosen(index){
    chosenList.push(chosenList[index]);
    chosenList.splice(index,1);
    console.log(optionsList);
    console.log(chosenList);
    addOption(chosenList[index]);
    removeFromOptions(index);
}

function addButt() { 
    console.log("should add");
};
function remButt() { 
    console.log("should remove");
};
let isSelected = [];

for (let el of document.querySelectorAll("#options li")) {
  isSelected.push(false);
  el.onclick = () => {
    // index of the element???
    let allItems = Array.from(document.querySelectorAll("#options li"));
    let index = allItems.indexOf(el);
    //console.log("Index: " + index);
    // toggle the appropriate isSelected element
    isSelected[index] = !isSelected[index];
    if (isSelected[index]) {
      moveToChosen;
      removeFromOptions;
    } 
    else {
      el.style.backgroundColor = "";
    }
  };
}