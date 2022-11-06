console.log("hello3");

const fs = require('fs');


let mydata = [
    { thing1: 'hello',
      thing2: 27 },
      { thing1: 'goodbye',
      thing2: 72 },      
];

let jsonString = JSON.stringify(mydata, null, 2);



//console.log(mydata[1]);
console.log("original:");
console.log(jsonString);
//console.log(jsonString[0]);

// fs.writeFileSync("outputFiles/jsonData.json", jsonString);


let jsonStringFromFile = fs.readFileSync('outputFiles/jsonData.json', { encoding: 'utf8'});

console.log("fromFile:");
console.log(jsonStringFromFile);

let dataFromFile = JSON.parse(jsonStringFromFile);

console.log("After JSON.parse");
console.log(dataFromFile);

console.log(dataFromFile.residents[3]);