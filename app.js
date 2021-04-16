// // DOM Elements (Nodes)




// // getElementById()
// // Document is refering to html page
// const title = document.getElementById('title');
// console.log(title);

// // querySelector() by class
// const containerDiv = document.querySelector(".container"); //
// console.log(containerDiv);

// // querySelector() by id
// const titleId = document.querySelector("#title"); //
// console.log(titleId);


// console.log("----")
// // Grab all elements and print to console

// const get1 = document.querySelector("#one");
// console.log(get1);

// const get2 = document.querySelector("#two");
// console.log(get2);

// const get3 = document.querySelector(".three");
// console.log(get3);

// const get4 = document.querySelector(".image");
// console.log(get4);

// const get5 = document.querySelector(".listItem");
// console.log(get5);

// const get6 = document.querySelector("head");
// console.log(get6)

// const containerTwoList = document.getElementsByClassName('container-2'); // HTML collection
// console.log(containerTwoList)

// const containerTwoList2 = document.querySelectorAll('container-2');
// console.log(containerTwoList2);

// const containerTwoArray = Array.from(containerTwoList);
// console.log(containerTwoArray);

/*
const pOne = document.querySelector('#one');
console.log(pOne)
console.log(pOne.textContent);
pOne.textContent = " Goodbye";
console.log(pOne.textContent);


const pTwo = document.querySelector('#two');
console.log("Original text = " + pTwo.textContent);
pTwo.textContent = "This is wild!"
console.log("New text = " + pTwo.textContent)

const pThree = document.querySelector('.three');
console.log("Original text = " + pThree.textContent);
pThree.textContent = "Na fam";
console.log("New text = " + pThree.textContent);

const liOne = document.querySelector('.listItem');
liOne.textContent = "Lemon Pepper Freestyle";
*/






/* 
1. Create element
2. Grab an existing element off the page
3. Append the new element to the page

*/

/*
const newDIV = document.createElement('div');
newDIV.textContent = "New DIV";
document.body.appendChild(newDIV)

const li2 = document.createElement('li');
li2.textContent = "Test";
const ul = document.querySelector('ul');
ul.append(li2);

const newImg = document.createElement('img');
newImg.src = "https://i.pinimg.com/originals/7f/d8/0d/7fd80d4b29634a55db64caa687b859aa.jpg";
document.body.appendChild(newImg);

function addH1() {
    const h1 = document.createElement('h1');
    h1.textContent = "Added with a function";
    document.body.appendChild(h1);
}

addH1();
*/


//body
const body = document.querySelector('body');
body.style.backgroundColor = "#0082b5"
body.style.textAlign = "center"

// H1
const h1 = document.querySelector("#title");
h1.style.color = "#fff";
h1.style.fontFamily = "sans-serif";
h1.textContent = "Fun with JS";

//add image
const divOne = document.querySelector('#one');
const newImg = document.createElement('img');
newImg.src = "https://i.pinimg.com/originals/7f/d8/0d/7fd80d4b29634a55db64caa687b859aa.jpg";
divOne.append(newImg);

//img
const img = document.querySelector('img');
img.style.borderRadius = "150px";
img.style.width = "250px";
img.style.margin = "0 auto";


// //remove div p
const p = document.querySelectorAll('p');
p.remove();
