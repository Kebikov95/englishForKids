class Card {
    constructor(options){
        this.word = options.word;
        this.translation = options.translation;
        this.image = options.image;
        this.audioSrc = options.audioSrc;
    }

    getCard() {
        let card = document.createElement('div');
        card.classList = 'card';

        let front = document.createElement('div');
        front.classList = 'front';
        let photo = document.createElement('img');
        photo.classList = 'photo';
        photo.src = "../source/" + this.image;
        let audio = document.createElement('audio');
        audio.classList = 'audio';
        audio.src = "../source/" + this.audioSrc;
        let pharagraph = document.createElement('p');
        pharagraph.innerHTML = this.word;
        let button = document.createElement('button');
        front.append(photo);
        front.append(audio);
        front.append(pharagraph);
        front.append(button);
       
        let back = document.createElement('div');
        back.classList = 'back';
        let photoBack = document.createElement('img');
        photoBack.classList = 'photo';
        photoBack.src = "../source/" + this.image;
        let pharagraphBack = document.createElement('p');
        pharagraphBack.innerHTML = this.translation;
        back.append(photoBack);
        back.append(pharagraphBack);

        card.append(front);
        card.append(back);

        return card;
    }
}

export default Card;