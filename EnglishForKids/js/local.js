import cards from '../source/cards.js';

class Local {
    constructor() {}

    get getPage() {
        return localStorage.getItem('page') || 'main page';
    }
    set setPage(page) {
        localStorage.setItem('page', page);
    }

    get getMode() {
        return localStorage.getItem('mode') || 'train';
    }
    set setMode(mode) {
        localStorage.setItem('mode', mode);
    }

    reverseMode() {
        if(this.getMode == 'train') {
            localStorage.setItem('mode', 'play');
        } else {
            localStorage.setItem('mode', 'train');
        }
    }

    getPageNumber() {
        for(let i = 0; i < cards[0].length; i++) {
            if(this.getPage == cards[0][i]) return i;
        }
    }
}

export default Local;