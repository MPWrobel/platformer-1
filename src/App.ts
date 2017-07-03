/// <reference path="Boot.ts"/>
/// <reference path="Preloader.ts"/>
/// <reference path="MainMenu.ts"/>
/// <reference path="Game.ts"/>

class App  {

    app: Phaser.Game;
    boot: Boot = new Boot();
    preloader: Preloader = new Preloader();
    mainMenu: MainMenu = new MainMenu();
    game: Game = new Game();

    constructor() {

        this.app = new Phaser.Game(800, 600, Phaser.AUTO, 'content', null, false, false);

        this.app.state.add('Boot', this.boot);
        this.app.state.add('Preloader', this.preloader);
        this.app.state.add('MainMenu', this.mainMenu);
        this.app.state.add('Game', this.game);

        this.app.state.start('Boot');

    }

}

const app = new App();