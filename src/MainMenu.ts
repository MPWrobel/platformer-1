class MainMenu extends Phaser.State {

    create() {

        console.log('State: MainMenu'); 

        this.game.state.start('Game');

    }

}