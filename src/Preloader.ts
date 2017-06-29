class Preloader extends Phaser.State {

    preload() {

        console.log('State: Preloader');
        
    }

    create() {

        this.game.state.start('MainMenu');

    }

}