class Boot extends Phaser.State {

    preload() {

        console.log('State: Boot');
        this. scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.load.image('preloaderBar','assets/preload.png');

    }

    create() {

        this.game.state.start('Preloader');

    }

}