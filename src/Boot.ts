class Boot extends Phaser.State {

    preload() {

        console.log('State: Boot');
        this. scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.load.image('preloaderBar','assets/preload.png');
        this.load.json('mapJSON1', '../assets/map1.json?' + new Date().getTime());
        this.load.json('mapJSON1', '../assets/map1.json?' + new Date().getTime());


    }

    create() {

        this.game.state.start('Preloader');

    }

}