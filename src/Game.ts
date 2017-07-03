/// <reference path="Player.ts"/>
/// <reference path="Frames.ts"/>

class Game extends Phaser.State {

  create() {

    console.log('State: Game');

    this.stage.backgroundColor = '#00BFFF'

    let map = this.game.add.tilemap('map1');
    map.addTilesetImage('tileset', 'tileset');
    map.setCollisionBetween(1, 64);
    this.game.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    let layer = map.createLayer('layer1');
    map.createLayer('clouds');

    const player = new Player(this.game, layer, 50, 900);

    console.log(player);

  }

}