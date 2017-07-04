/// <reference path="Player.ts"/>
/// <reference path="Frames.ts"/>
/// <reference path="Map.ts"/>

class Game extends Phaser.State {

  player: Player;

  create() {

    console.log('State: Game');

    this.stage.backgroundColor = '#00BFFF'

    let map = new Map(this.game, 1);
    this.game.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    let layer = map.createLayer('layer1');
    map.createLayer('clouds');

    this.player = new Player(this.game, layer, map.get().player.x, map.get().player.y);
  }

}