// Write your code here!

const mainElem = document.getElementById("main");

mainElem.remove();

const newHeader = document.createElement("h1");
newHeader.id = 'victory';
document.body.appendChild(newHeader);

newHeader.innerHTML = "Amelia is the champion";