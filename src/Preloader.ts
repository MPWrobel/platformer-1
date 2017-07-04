class Preloader extends Phaser.State {

    preloadBar: Phaser.Sprite;

    preload() {

        console.log('State: Preloader');

        this.preloadBar = this.add.sprite(200, 250, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);
        this.load.tilemap('map1', null, this.cache.getJSON('mapJSON1'), Phaser.Tilemap.TILED_JSON);
        this.load.image('tileset', '../assets/tileset.png');
        this.load.atlasJSONArray('player', '../assets/player.png', '../assets/player.json');
    }

    create() {

        this.game.state.start('MainMenu');

    }

}