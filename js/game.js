var Game = (function () {
    function Game() {
        this.game = new Phaser.Game(600, 600, Phaser.AUTO, 'content', {
            preload: this.preload,
            create: this.create
        });
    }
    Game.prototype.preload = function () {
    };
    Game.prototype.create = function () {
    };
    return Game;
}());
window.onload = function () {
    var game = new Game();
};
