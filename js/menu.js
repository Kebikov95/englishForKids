import Local from "./local.js";

const LOCAL = new Local();
console.log(LOCAL.getMode);
console.log(LOCAL.getPage);

/* Menu-bar function. */
export function clickMenuBar() {
    console.log('Click menu');
    let menuIcon = document.querySelector('.menu-icon');
    let navBar = document.querySelector('nav');
    
    menuIcon.classList.toggle('menu-icon-active');
    navBar.classList.toggle('hidden');
}

export function initSwitch() {
    let div = document.getElementById('switch');

    let p = document.createElement('p');
    p.innerHTML = LOCAL.getMode;
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.value = 0;

    div.appendChild(p);
    div.appendChild(input);
}

/* Checkbox Train or Play.*/
export function clickSwitch() {
    LOCAL.reverseMode();
    changeStyleMode();
};

export function changeStyleMode() {
    let switchBar = document.querySelector('#switch');
    let navBar = document.querySelector('nav');
    let itemBar = document.querySelectorAll('.main-container .item div');
    let checkbox = document.querySelector(".switch input[type='checkbox']");
    let paragraph = document.querySelector(".switch p");
    
    if(checkbox.style.order == '-1'){
        checkbox.style.order = 1;
        paragraph.innerHTML = 'train';
    } else {
        checkbox.style.order = -1;
        paragraph.innerHTML = 'play';   
    }

    if(LOCAL.getMode === 'play') {
        switchBar.style.background = 'linear-gradient(to top left, yellow, orange)';
        navBar.style.background = 'linear-gradient(to top left, yellow, orange)';
        for(let item of itemBar){
            item.style.background = 'linear-gradient(to top left, yellow, orange)';
        }
    } else {
        switchBar.style.background = 'linear-gradient(to top left, powderblue, blue)';
        navBar.style.background = 'linear-gradient(to top left, powderblue, blue)';
        for(let item of itemBar){
            item.style.background = 'linear-gradient(to top left, powderblue, blue)';
        }
    }
}