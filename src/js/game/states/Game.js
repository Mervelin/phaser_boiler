//import Player from "../prefabs/Player.js";

export default class Game extends Phaser.State {

  constructor() {
    super();
  }

  create() {
    var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
  }

  update() {

  }

}

/*var game = {};

game.create = function () {
  var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
  logo.anchor.setTo(0.5, 0.5);
};

module.exports = game;
*/