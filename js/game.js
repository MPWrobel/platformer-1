var Game = (function () {
    function Game() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
            preload: this.preload,
            create: this.create
        });
    }
    Game.prototype.preload = function () {
        this.game.load.tilemap('map1', '../assets/map1.json?' + new Date().getTime(), null, Phaser.Tilemap.TILED_JSON); //obejście pamięci podręcznej przeglądarki
        this.game.load.image('tileset1', '../assets/tileset.png');
    };
    Game.prototype.create = function () {
        this.game.stage.backgroundColor = '#ccf5ff';
        this.map = this.game.add.tilemap('map1');
        this.map.addTilesetImage('tileset1', 'tileset1');
        this.map.createLayer('layer1');
    };
    return Game;
}());
new Game();
