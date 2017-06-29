class Game extends Phaser.State {

    map: Phaser.Tilemap;

    preload() {

        console.log('State: Game');

        this.game.load.tilemap('map1', '../assets/map1.json?' + new Date().getTime(), null, Phaser.Tilemap.TILED_JSON); //obejście pamięci podręcznej przeglądarki
        this.game.load.image('tileset1', '../assets/tileset.png');

    }

    create() {

        this.game.stage.backgroundColor = '#ccf5ff'
        this.map = this.game.add.tilemap('map1');
        this.map.addTilesetImage('tileset1', 'tileset1');
        this.map.createLayer('layer1');    

    }

}