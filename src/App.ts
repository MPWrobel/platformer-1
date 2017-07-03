/// <reference path="Boot.ts"/>
/// <reference path="Preloader.ts"/>
/// <reference path="MainMenu.ts"/>
/// <reference path="Game.ts"/>

class App extends Phaser.Game {

    constructor() {

        super(800, 600, Phaser.AUTO, 'content', null, false, false);

        this.state.add('Boot', Boot);
        this.state.add('Preloader', Preloader);
        this.state.add('MainMenu', MainMenu);
        this.state.add('Game', Game);

        this.state.start('Boot');

    }

}

const app = new App();