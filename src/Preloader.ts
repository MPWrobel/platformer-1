class Preloader extends Phaser.State {

    preloadBar: Phaser.Sprite;

    preload() {

        console.log('State: Preloader');

        this.preloadBar = this.add.sprite(0,100,'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);

        this.load.tilemap('map1', '../assets/map1.json?' + new Date().getTime(), null, Phaser.Tilemap.TILED_JSON); //obejście pamięci podręcznej przeglądarki
        this.load.image('tileset1', '../assets/tileset.png');
        this.load.image('player', '../assets/stone.png');
        
}

    create() {

        this.game.state.start('MainMenu');

    }

}