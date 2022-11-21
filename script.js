"use strict"

const btn = document.getElementById('btn');
const jarred = document.getElementById('jarred');
const lolo = document.getElementById('lolo');
const container = document.getElementById('container');

const houseNames = [
    "Carlos",
    "Brandon",
    "Max",
    "Mitch",
    "Reece",
    "Warren",
    "Don",
    "Brenden",
    "Phil",
    "Ross",
    "Kyle",
    "Mpho",
    "Adam",
    "Ed"
];
const namesShuffled = houseNames.sort(() => Math.random() - 0.5);
const half = Math.ceil(namesShuffled.length / 2);
const firstHalf = namesShuffled.slice(0, half);
const secondHalf = namesShuffled.slice(half);


btn.addEventListener('click', () => {
    btn.style.display = 'none';
    container.style.display = 'flex';
    getJarredNames();
    getLoloNames();
    getChurchService();
});

function getJarredNames() {
    for (const name of firstHalf) {
        jarred.innerHTML += `<div class="names"<li>${name}</li></div>`;
        jarred.innerHTML += `${randomDate('11/21/2022', '11/25/2022')}`;
    }
};

function getLoloNames() {
    for (const name of secondHalf) {
        lolo.innerHTML += `<div class="names"<li>${name}</li></div>`;
        lolo.innerHTML += `${randomDate('11/21/2022', '11/25/2022')}`;
    };
};

function randomDate(date1, date2){
    function randomValueBetween(min, max) {
      return Math.random() * (max - min) + min;
    }
    var date1 = date1 || '01-01-1970'
    var date2 = date2 || new Date().toLocaleDateString()
    date1 = new Date(date1).getTime()
    date2 = new Date(date2).getTime()
    if( date1>date2){
        return new Date(randomValueBetween(date2,date1)).toLocaleDateString()   
    } else{
        return new Date(randomValueBetween(date1, date2)).toLocaleDateString()  

    }
};


function getChurchService() {
    const am = document.getElementById('am');
    const pm= document.getElementById('pm');
    am.innerText += `Church (AM): ${firstHalf[3]}, ${firstHalf[2]}, ${firstHalf[4]}`
    pm.innerText += `Church (PM): ${secondHalf[3]}, ${secondHalf[2]}, ${secondHalf[4]}`
}


