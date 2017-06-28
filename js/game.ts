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
        const style = {
            font: "65px Arial",
            fill: "white",
            align: "center"
        };
        this.game.add.text(100, 100, "hello world", style);
    }

}

window.onload = () => {

    var game = new Game();

};