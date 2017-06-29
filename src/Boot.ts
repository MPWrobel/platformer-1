class Boot extends Phaser.State {

    preload() {

        console.log('State: Boot');
        this.load.image('preloaderBar','assets/preload.png');

    }

    create() {

        this.game.state.start('Preloader');

    }

}