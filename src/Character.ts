class Character extends Phaser.Sprite {

    constructor(game: Phaser.Game, x: number, y: number, key) {

        super(game, x, y, key);
        game.physics.enable(this, Phaser.Physics.ARCADE);

        this.body.gravity.y = 300;

    }

}