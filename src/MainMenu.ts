class MainMenu extends Phaser.State {

    preload() {

        console.log('State: MainMenu');

    }

    create() {

        this.game.state.start('Game');

    }

}