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
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.load.image('preloaderBar', 'assets/preload.png');
        this.load.json('mapJSON1', '../assets/map1.json?' + new Date().getTime());
        this.load.json('mapJSON1', '../assets/map1.json?' + new Date().getTime());
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
        this.load.tilemap('map1', null, this.cache.getJSON('mapJSON1'), Phaser.Tilemap.TILED_JSON);
        this.load.image('tileset', '../assets/tileset.png');
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
        _this.velocity = 200;
        _this.jump = 600;
        _this.layer = layer;
        _this.body.collideWorldBounds = true;
        _this.game.camera.follow(_this);
        _this.anchor.setTo(.5, .5);
        _this.scale.setTo(4, 4);
        _this.animations.add('idle', new Frames(10, 19), 4, true);
        _this.animations.add('walk', new Frames(20, 29), 4, true);
        _this.animations.play('idle');
        game.add.existing(_this);
        return _this;
    }
    Player.prototype.update = function () {
        this.game.physics.arcade.collide(this, this.layer);
        this.body.velocity.x = 0;
        if (!this.body.onFloor() ||
            !(this.game.input.keyboard.isDown(Phaser.Keyboard.A) ||
                this.game.input.keyboard.isDown(Phaser.Keyboard.D) ||
                this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) ||
                this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)))
            this.animations.play('idle');
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.A) ||
            this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            this.body.velocity.x = -this.velocity;
            this.scale.setTo(-4, 4);
            this.animations.play('walk');
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.D) ||
            this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            this.body.velocity.x = this.velocity;
            this.scale.setTo(4, 4);
            this.animations.play('walk');
        }
        if (this.body.onFloor() &&
            (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) ||
                this.game.input.keyboard.isDown(Phaser.Keyboard.W) ||
                this.game.input.keyboard.isDown(Phaser.Keyboard.UP))) {
            this.body.velocity.y = -this.jump;
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
var Map = (function (_super) {
    __extends(Map, _super);
    function Map(game, number) {
        var _this = _super.call(this, game, 'map' + number) || this;
        _this.number = number;
        _this.addTilesetImage('tileset', 'tileset');
        _this.setCollisionBetween(1, 64);
        return _this;
    }
    Map.prototype.get = function () {
        return this.game.cache.getJSON('mapJSON' + this.number).objects;
    };
    return Map;
}(Phaser.Tilemap));
/// <reference path="Player.ts"/>
/// <reference path="Frames.ts"/>
/// <reference path="Map.ts"/>
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Game.prototype.create = function () {
        console.log('State: Game');
        this.stage.backgroundColor = '#00BFFF';
        var map = new Map(this.game, 1);
        this.game.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        var layer = map.createLayer('layer1');
        map.createLayer('clouds');
        this.player = new Player(this.game, layer, map.get().player.x, map.get().player.y);
    };
    return Game;
}(Phaser.State));
/// <reference path="Boot.ts"/>
/// <reference path="Preloader.ts"/>
/// <reference path="MainMenu.ts"/>
/// <reference path="Game.ts"/>
var App = (function () {
    function App() {
        this.boot = new Boot();
        this.preloader = new Preloader();
        this.mainMenu = new MainMenu();
        this.game = new Game();
        this.app = new Phaser.Game(1280, 720, Phaser.AUTO, 'content', null, false, false);
        this.app.state.add('Boot', this.boot);
        this.app.state.add('Preloader', this.preloader);
        this.app.state.add('MainMenu', this.mainMenu);
        this.app.state.add('Game', this.game);
        this.app.state.start('Boot');
    }
    return App;
}());
var app = new App();
//# sourceMappingURL=platformer-1.js.map