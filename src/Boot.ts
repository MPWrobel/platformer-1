class Boot extends Phaser.State {

    preload() {

        console.log('State: Boot');

    }

    create() {

        this.game.state.start('Preloader');

    }

}