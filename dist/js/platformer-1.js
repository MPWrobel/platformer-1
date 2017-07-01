var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Boot = (function (_super) {
    __extends(Boot, _super);
    function Boot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Boot.prototype.preload = function () {
        console.log('State: Boot');
        this.load.image('preloaderBar', 'assets/preload.png');
    };
    Boot.prototype.create = function () {
        this.game.state.start('Preloader');
    };
    return Boot;
}(Phaser.State));
var Preloader = (function (_super) {
    __extends(Preloader, _super);
    function Preloader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Preloader.prototype.preload = function () {
        console.log('State: Preloader');
        this.preloadBar = this.add.sprite(200, 250, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);
        this.load.tilemap('map1', '../assets/map1.json?' + new Date().getTime(), null, Phaser.Tilemap.TILED_JSON); //obejście pamięci podręcznej przeglądarki
        this.load.image('tileset1', '../assets/tileset.png');
        this.load.atlasJSONArray('player', '../assets/player.png', '../assets/player.json');
    };
    Preloader.prototype.create = function () {
        this.game.state.start('MainMenu');
    };
    return Preloader;
}(Phaser.State));
var MainMenu = (function (_super) {
    __extends(MainMenu, _super);
    function MainMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainMenu.prototype.create = function () {
        console.log('State: MainMenu');
        this.game.state.start('Game');
    };
    return MainMenu;
}(Phaser.State));
var Character = (function (_super) {
    __extends(Character, _super);
    function Character(game, x, y, key) {
        var _this = _super.call(this, game, x, y, key) || this;
        game.physics.enable(_this, Phaser.Physics.ARCADE);
        _this.body.gravity.y = 800;
        return _this;
    }
    return Character;
}(Phaser.Sprite));
/// <reference path="Character.ts"/>
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(game, layer, x, y) {
        var _this = _super.call(this, game, x, y, 'player') || this;
        _this.hp = 100;
        _this.points = 0;
        _this.layer = layer;
        _this.body.collideWorldBounds = true;
        _this.game.camera.follow(_this);
        _this.anchor.setTo(.5, .5);
        _this.scale.setTo(4, 4);
        _this.animations.add('idle', new Frames(10, 19), 5, true);
        _this.animations.add('walk', new Frames(20, 29), 5, true);
        _this.animations.play('idle');
        game.add.existing(_this);
        return _this;
    }
    Player.prototype.update = function () {
        this.game.physics.arcade.collide(this, this.layer);
        this.body.velocity.x = 0;
        if (!(this.game.input.keyboard.isDown(Phaser.Keyboard.A) ||
            this.game.input.keyboard.isDown(Phaser.Keyboard.D) ||
            this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) ||
            this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)))
            this.animations.play('idle');
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.A) ||
            this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            this.body.velocity.x = -200;
            this.scale.setTo(-4, 4);
            this.animations.play('walk');
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.D) ||
            this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            this.body.velocity.x = 200;
            this.scale.setTo(4, 4);
            this.animations.play('walk');
        }
        if (this.body.onFloor() &&
            (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) ||
                this.game.input.keyboard.isDown(Phaser.Keyboard.W) ||
                this.game.input.keyboard.isDown(Phaser.Keyboard.UP))) {
            this.body.velocity.y = -600;
        }
    };
    return Player;
}(Character));
var Frames = (function (_super) {
    __extends(Frames, _super);
    function Frames(start, end) {
        var _this = _super.call(this) || this;
        for (var i = start; i <= end; i++) {
            _this.push(i);
        }
        return _this;
    }
    return Frames;
}(Array));
/// <reference path="Player.ts"/>
/// <reference path="Frames.ts"/>
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Game.prototype.create = function () {
        console.log('State: Game');
        this.stage.backgroundColor = '#00BFFF';
        var map = this.game.add.tilemap('map1');
        map.addTilesetImage('tileset1', 'tileset1');
        map.setCollisionBetween(1, 64);
        this.game.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        var layer = map.createLayer('layer1');
        map.createLayer('clouds');
        var player = new Player(this.game, layer, 50, 900);
        console.log(player);
    };
    return Game;
}(Phaser.State));
/// <reference path="Boot.ts"/>
/// <reference path="Preloader.ts"/>
/// <reference path="MainMenu.ts"/>
/// <reference path="Game.ts"/>
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super.call(this, 800, 600, Phaser.AUTO, 'content', null, false, false) || this;
        _this.state.add('Boot', Boot);
        _this.state.add('Preloader', Preloader);
        _this.state.add('MainMenu', MainMenu);
        _this.state.add('Game', Game);
        _this.state.start('Boot');
        return _this;
    }
    return App;
}(Phaser.Game));
new App();
