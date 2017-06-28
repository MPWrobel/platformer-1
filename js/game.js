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
        var style = {
            font: "65px Arial",
            fill: "white",
            align: "center"
        };
        this.game.add.text(100, 100, "hello world", style);
    };
    return Game;
}());
window.onload = function () {
    var game = new Game();
};
