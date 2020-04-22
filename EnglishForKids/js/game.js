import Local from './local.js';

class Game {
    constructor() {
        this.local = new Local();
        this.audioArray = this.getRandomAudioArray(this.initAudioArray);
    }

    init() {
        if(this.local.getPage != 'Main page') {
            if(this.local.getMode == 'play') {
                this.initStartButton();
                this.audioArray = this.initAudioArray();
                this.RandomAudioArray = this.getRandomAudioArray(this.audioArray);
            }
        }
    }

    initStartButton() {
        let buttonStart = document.querySelector('.btn.start.hidden');
        console.log(buttonStart);
        buttonStart.classList.remove('hidden');
    }

    changeStartButton() {
        let buttonStart = document.querySelector('.btn.start');
        buttonStart.classList.add('hidden');

        let buttonRepeat = document.querySelector('.btn.repeat.hidden');
        buttonRepeat.classList.remove('hidden');
    }

    initAudioArray() {
        let audioCollection = document.getElementsByTagName('audio');
        return Array.prototype.slice.call( audioCollection );
    }

    getRandomAudioArray(arr) {
		let randomArr = new Array(arr.length);

		for(let i = 0; i < arr.length; i++) {
		let isWrite = false;

		while(!isWrite) {
			let index = Math.floor(Math.random() * arr.length);
			if(!randomArr[index]) {
				randomArr[index] = arr[i];
				isWrite = true;
			}
		  }
	    }
	    return randomArr;
    }

    playAudio() {
        let randomArr = this.RandomAudioArray;
        randomArr[0].play();
    }
}

export default Game;