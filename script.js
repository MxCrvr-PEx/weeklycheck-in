"use strict"

const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
const jarred = document.getElementById('jarred');
const don = document.getElementById('don');
const container = document.getElementById('container');
const container2 = document.getElementById('container2');
const backText = document.getElementById('back-text');

const houseNames = [
    "Carlos",
    "Brandon",
    "Max",
    "Mitch",
    "Reece",
    "Warren",
    "Brenden",
    "Ross",
    "Kyle",
    "Mpho",
    "Adam",
    "Linden",
    "Ed"
];
const namesShuffled = houseNames.sort(() => Math.random() - 0.5);
const half = Math.ceil(namesShuffled.length / 2);
const firstHalf = namesShuffled.slice(0, half);
const secondHalf = namesShuffled.slice(half);

// Weekly Check-in
btn.addEventListener('click', () => {
    btn.style.display = 'none';
    btn2.style.display = 'none';
    container.style.display = 'flex';
    getJarredNames();
    getDonNames();
    getChurchService();
});
function getJarredNames() {
    for (const name of firstHalf) {
        jarred.innerHTML += `<div class="names"<li>${name}</li></div>`;
        jarred.innerHTML += `${randomDate('11/28/2022', '12/02/2022')}`;
    }
};
function getDonNames() {
    for (const name of secondHalf) {
        don.innerHTML += `<div class="names"<li>${name}</li></div>`;
        don.innerHTML += `${randomDate('11/28/2022', '12/02/2022')}`;
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

// Duties
btn2.addEventListener('click', () => {
    btn.style.display = 'none';
    btn2.style.display = 'none';
    container2.style.display = 'grid';
    getDuty()
    getDuties()
})

const duties = [
    "Lounge",
    "Passageway & Staircases",
    "Dining Room",
    "Library",
    "Training Room",
    "Entertainment Area",
    "Garden",
    "Pool",
    "Outside Walkways",
    "Bin Area",
    "Kitchen & Pantry",
]

const dutiesList = document.getElementById('duties')
function getDuty() {
    for (const duty of duties) {
        dutiesList.innerHTML += `<h4>${duty}</h4>`
    }
}

const dutyNames = document.getElementById('duty-names')
function getDuties() {
    for (const name of namesShuffled) {
        dutyNames.innerHTML += `<p>${name}</p>`;
    }
}

backText.addEventListener('click', () => {
    btn.style.display = 'block';
    btn2.style.display = 'block';
    container.style.display = 'none';
    container2.style.display = 'none';
    dutiesList.innerHTML = ''
    dutyNames.innerHTML = ''
})