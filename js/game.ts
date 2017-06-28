class Game {

    game: Phaser.Game;
    map: Phaser.Tilemap

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
            preload: this.preload,
            create: this.create
        });
    }


    preload() {
        this.game.load.tilemap('map1', '../assets/map1.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tileset1', '../assets/tileset.png');
    }

    create() {
        this.game.stage.backgroundColor = '#ccf5ff'
        this.map = this.game.add.tilemap('map1');
        this.map.addTilesetImage('tileset1', 'tileset1');
        this.map.createLayer('layer1');
    }

}

window.onload = () => {

    var game = new Game();

};