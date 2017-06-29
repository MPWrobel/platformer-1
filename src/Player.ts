/// <reference path="Character.ts"/>

class Player extends Character {

    hp: number;

    constructor(game: Phaser.Game, x: number, y: number, hp: number) {

        super(game, x, y, 'player');
        this.hp = hp;

        game.add.existing(this);

    }

    update() {


        if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {

            this.x--;

        } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {

            this.x++;

        }

    }

}