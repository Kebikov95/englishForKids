import cards from "../source/cards.js";
// import Card from "./card.js";
import Local from "./local.js";
import {clickMenuBar, clickSwitch, initSwitch, changeStyleMode} from "./menu.js";

const ITEMS = document.getElementsByClassName('item');
const MENU = document.getElementById('menu');
const SWITCH = document.getElementById('switch');
const LOCAL = new Local();

console.log(LOCAL.getMode)

/* Init page style. */
initSwitch();

if(LOCAL.getMode === 'play') {
    changeStyleMode();
}

/* Functions for working with menubar and switch on this page. */
MENU.addEventListener('click', clickMenuBar);
SWITCH.addEventListener('click', clickSwitch);

/* Initialization cards on main page. */
function initMainContainer(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i].getElementsByTagName('p')[0].innerHTML = cards[0][i];
        arr[i].getElementsByTagName('img')[0].src =  './source/' + cards[i+1][0].image;
    };
}
initMainContainer(ITEMS);

/* Links. */
const A = document.getElementsByTagName('a');


for(let i = 0; i < A.length; i++) {
    A[i].addEventListener('click', () => {
        LOCAL.setPage = A[i].innerText;
        console.log('link', A[i].innerText);
    })
}