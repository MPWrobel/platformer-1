/// <reference path="Character.ts"/>

class Player extends Character {

    layer: Phaser.TilemapLayer
    hp: number = 100;
    points: number = 0;

    constructor(game: Phaser.Game, layer: Phaser.TilemapLayer, x: number, y: number) {

        super(game, x, y, 'player');
        this.layer = layer;
        this.body.collideWorldBounds = true;
        this.game.camera.follow(this);

        this.anchor.setTo(.5, .5);
        this.scale.setTo(4, 4);

        this.animations.add('idle', new Frames(10, 19), 5, true);
        this.animations.add('walk', new Frames(20, 29), 5, true);

        this.animations.play('idle');

        game.add.existing(this);

    }

    update() {

        this.game.physics.arcade.collide(this, this.layer);

        this.body.velocity.x = 0;

        if (!(this.game.input.keyboard.isDown(Phaser.Keyboard.A) ||
                this.game.input.keyboard.isDown(Phaser.Keyboard.D) ||
                this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) ||
                this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)))
            this.animations.play('idle');

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.A) ||
            this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {

            this.body.velocity.x = -200;
            this.scale.setTo(-4, 4);
            this.animations.play('walk');

        } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.D) ||
            this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {

            this.body.velocity.x = 200;
            this.scale.setTo(4, 4);
            this.animations.play('walk');

        }

        if (this.body.onFloor() &&
            (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) ||
                this.game.input.keyboard.isDown(Phaser.Keyboard.W) ||
                this.game.input.keyboard.isDown(Phaser.Keyboard.UP))) {

            this.body.velocity.y = -600;

        }

    }

}