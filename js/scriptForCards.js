import cards from "../source/cards.js";
import Card from "./card.js";
import Local from "./local.js";
import Game from "./game.js";
import {clickMenuBar, clickSwitch, initSwitch, changeStyleMode} from "./menu.js";

const MENU = document.getElementById('menu');
const SWITCH = document.getElementById('switch');
const A = document.getElementsByTagName('a');
const CARDS_CONTAINER = document.getElementById("cards-container");
const LOCAL = new Local();

/* Init page style. */
initSwitch();

if(LOCAL.getMode === 'play') {
    changeStyleMode();
}

/* Functions for working with menubar and switch on this page. */
MENU.addEventListener('click', clickMenuBar);
SWITCH.addEventListener('click', clickSwitch);

/* INIT cards on words page. */
function initCardsContainer(arr) {
    console.log('number', LOCAL.getPageNumber());
    let n = LOCAL.getPageNumber();
    for(let k = 0; k < cards[n+1].length; k++) {
        let card = new Card(cards[n+1][k]);
        arr.append(card.getCard());
    }
}
initCardsContainer(CARDS_CONTAINER);

/* Add functionality for button return card. */
const BUTTONS = document.querySelectorAll('.card button');
const CARDS = document.querySelectorAll('.card');
/* Rotate card */
for(let i = 0; i < BUTTONS.length; i++) {
    BUTTONS[i].addEventListener('click', () => {
        CARDS[i].querySelector('.front').style.transform = 'rotateY(180deg)';
        CARDS[i].querySelector('.back').style.transform = 'rotateY(360deg)';
        CARDS[i].classList.add('active');
    });
}

/* Return card */
for(let i = 0; i < BUTTONS.length; i++) {
    CARDS[i].addEventListener('mouseout', () => {
        if(CARDS[i].classList.contains('active')) {
            CARDS[i].querySelector('.front').style.transform = 'rotateY(360deg)';
            CARDS[i].querySelector('.back').style.transform = 'rotateY(180deg)';
            CARDS[i].classList.remove('active');
        }
    });
}

for(let i = 0; i < A.length; i++) {
    A[i].addEventListener('click', () => {
        if(A[i].innerHTML == 'Main page') {
            LOCAL.setPage = A[i].innerHTML;
            console.log(LOCAL.getPage);
        }
        else {
            LOCAL.setPage = A[i].innerHTML;
            console.log(LOCAL.getPage);
            let item = 1;
    
            for(let j = 0; j < cards[0].length; j ++) {
                if(A[i].innerHTML == cards[0][j]){
                    item += j;
                }
            }

            CARDS_CONTAINER.innerHTML = "";
            for(let k = 0; k < cards[item].length; k++){
                let card = new Card(cards[item][k]);
                CARDS_CONTAINER.append(card.getCard());
            }
            location.reload();
            console.log(cards[0][item], item);
            console.log(cards[item]);
        }
    })
}

// play mp3
let fronts = document.querySelectorAll('.front img');

for(let i = 0; i < fronts.length; i++) {
    fronts[i].addEventListener('click', () => {
        let audio = fronts[i].nextSibling;
        audio.play();
        console.log(audio)

    })
}


let game = new Game();
game.init();

if(document.hasChildNodes('.btn.start')) {
    let btnStart = document.querySelector('.btn.start');
    btnStart.onclick = function() {
        game.changeStartButton();
    }
}

if(document.hasChildNodes('.btn.repeat')) {
    let btnRepeat = document.querySelector('.btn.repeat');
    btnRepeat.onclick = function() {
        game.playAudio();
    }
}



