class Map extends Phaser.Tilemap {
    
    number: number;

    constructor(game: Phaser.Game, number: number) {

        super(game, 'map' + number);
        this.number = number;

        this.addTilesetImage('tileset', 'tileset');
        this.setCollisionBetween(1,64);

    }

    get() {
        return this.game.cache.getJSON('mapJSON' + this.number).objects;
    }

}