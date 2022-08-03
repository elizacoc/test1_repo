console.log("Hello World!");
let someText = 'Say something';
function showGreeting(text) {
    const internalVar = 'Internal var';
    console.log('Se afiseaza ', text);
}

showGreeting(someText);

function changeText(newText) {
    const internal = 'ceva text'
    someText = newText;
}
console.log(someText);
changeText('Hello from the outside');
console.log(someText);

let constantaNoua = {
    nume: 'Adele',
    function: 'Singer'
}

console.log(constantaNoua);

const matrice = [[1, 2], [3, 4], [5, 6]];
console.log(matrice);

document.addEventListener('DOMContentLoaded', () => {
changeLink2();
changeLink3();
});

function changeLink () {

  const link = document.querySelector('a');
  link.href = 'www.google.com';
  link.textContent = 'Google';

}

function changeLink2 () {

    const parent = document.getElementsByTagName('ul')[0];
    const liClone = parent.lastElementChild.cloneNode();
    const anchor = document.createElement('a');
    anchor.href = 'www.google.com';
    anchor.textContent = 'Google';
    liClone.appendChild(anchor);
    parent.appendChild(liClone);
    
  }

  const changeLink3 = () => {

    const parent = document.getElementsByTagName('ul')[0];
    const liClone = parent.lastElementChild.cloneNode();
    const anchor = document.createElement('a');
    anchor.href = 'www.google.com';
    anchor.textContent = 'Google';
    liClone.appendChild(anchor);
    parent.insertBefore(liClone, parent.children[2]);
  }

  