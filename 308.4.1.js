// https://www.canva.com/design/DAFxumk-vR0/VYKb17-6iKqVOD5NOVsidA/edit

//Part I: Refactoring Old Code
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// I'll use these for the column header, it's empty, so it should add it after
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

//This is a reference to where I am, which column/cell
let currentCell = 1;

//the standard loop, I understand this
for (let i = 0; i < csv.length; i++) {
  const ch = csv[i]; //it's a character grabber

  if (ch === ",") { //searching for commas
    // move to the next cell
    currentCell++;
  } else if (ch === "\n") { //one it spots this, that means the row is done
    // end of row: log the 4 cells
    console.log(cell1, cell2, cell3, cell4);

   
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
    currentCell = 1;
  } else {
    
    if (currentCell === 1) {
      cell1 = cell1 + ch;
    } else if (currentCell === 2) {
      cell2 = cell2 + ch;
    } else if (currentCell === 3) {
      cell3 = cell3 + ch;
    } else if (currentCell === 4) {
      cell4 = cell4 + ch;
    }
  }
}

//Part II
console.log(`\nExcersise 3: Feeling Loopy`);
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let arr = csv.split("\n"); //returns an array of strings from CSV, spilit up by '\n'

let arr2 = [];
//iterate through all the strings in arr
for (i of arr) {
    arr2.push(i.split(",")); //split converts intila strings from arr into array of strings split by ',', sotre them into new array
}
console.log(arr2);


// console.log(`\nExcersise 3: Feeling Loopy`);
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let arr = csv.split("\n"); //returns an array of strings from CSV, spilit up by '\n'

let arr2 = [];
//iterate through all the strings in arr
for (i of arr){  
   arr2.push( i.split(",")); //split converts intila strings from arr into array of strings split by ',', sotre them into new array
}
// console.log(arr2);

//Part 3: Transforming Data
let arr_of_objs = []; //empty array
let keys = arr2[0]; //array of the keys we need

//for loop to create necessary amount of objects 
for (let i = 1; i<arr2.length;i++){
   
    let obj = {}; //initilzing empty object
    
    for(let x=0;x<arr2[i].length;x++){
        obj[keys[x].toLowerCase()] = arr2[i][x];

    }
    arr_of_objs.push(obj);
    console.log(obj);   
}

console.log(arr_of_objs);

//