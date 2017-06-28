class Game {

    game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(600, 600, Phaser.AUTO, 'content', {
            preload: this.preload,
            create: this.create
        });
    }


    preload() {

    }

    create() {

    }

}

window.onload = () => {

    var game = new Game();

};