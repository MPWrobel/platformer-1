/// <reference path="Character.ts"/>

class Player extends Character {

    layer: Phaser.TilemapLayer
    hp: number;

    constructor(game: Phaser.Game, layer: Phaser.TilemapLayer, x: number, y: number, hp: number) {

        super(game, x, y, 'player');
        this.layer = layer;
        this.hp = hp;
        this.body.collideWorldBounds = true;

        game.add.existing(this);
        this.game.camera.follow(this);

    }

    update() {
        this.game.physics.arcade.collide(this, this.layer);

        this.body.velocity.x = 0;

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.A) ||
            this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {

            this.body.velocity.x = -100;

        } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.D) ||
            this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {

            this.body.velocity.x = 100;
 
        }

        if (this.body.onFloor()
        && (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) || 
        this.game.input.keyboard.isDown(Phaser.Keyboard.W) || 
        this.game.input.keyboard.isDown(Phaser.Keyboard.UP))) {
            
            this.body.velocity.y = -350;
        
        }

    }

}