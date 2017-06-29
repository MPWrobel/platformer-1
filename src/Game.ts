/// <reference path="Player.ts"/>

class Game extends Phaser.State {

    map: Phaser.Tilemap;
    player: Player;

    create() {

        console.log('State: Game');

        this.stage.backgroundColor = '#00BFFF'
        this.map = this.game.add.tilemap('map1');
        this.map.addTilesetImage('tileset1', 'tileset1');
        this.map.createLayer('layer1');

        this.player = new Player(this.game, 50,400,100);
        console.log(this.player);

    }

}