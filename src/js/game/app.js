var game;

import Boot from "./states/Boot.js";
import Preload from "./states/Preload.js";
import Game from "./states/Game.js";
var properties = require('./properties');

window.onload = function () {
  game = new Phaser.Game(properties.size.x, properties.size.y, Phaser.AUTO, 'game');
  game.state.add('boot', Boot);
  game.state.add('preload', Preload);
  game.state.add('game', Game);
  game.state.start('boot');
};

/*var _ = require('lodash');
var properties = require('./properties');
var game;

var states = {
  boot: require('./states/Boot.js'),
  preloader: require('./states/preloader.js'),
  game: require('./states/game.js')
};

window.onload = function () {
  game = new Phaser.Game(properties.size.x, properties.size.y, Phaser.AUTO, 'game');

    // Automatically register each state.
  _.each(states, function(state, key) {
    game.state.add(key, state);
  });

  game.state.start('boot');
}
*/






