var Stats = require('../../lib/stats.min');
var properties = require('../properties');

export default class Boot extends Phaser.State {

  constructor() {
    super();
  }

  init() {
    //  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
    this.input.maxPointers = 1;

    //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
    this.stage.disableVisibilityChange = true;

    /* if (this.game.device.desktop) {
      //  If you have any desktop specific settings, they can go in here
      this.scale.pageAlignHorizontally = true;
    } else {
      //  Same goes for mobile settings.
      //  In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.scale.setMinMax(480, 260, 1024, 768);
      this.scale.forceLandscape = true;
      this.scale.pageAlignHorizontally = true;
    } */
	
	this.game.stage.backgroundColor = '#fff';

    //scaling options
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    
    //have the game centered horizontally
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    //physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
  }

  preload() {
    this.load.image('loading_bg', 'assets/images/loading_bg.jpg');
    this.load.image('preloader', 'assets/images/loading_bar.png');
  }

  create() {
    if (properties.showStats) {
      this.addStats(this.game);
    }

    this.game.sound.mute = properties.mute;

    this.game.state.start('preload');
  }

  addStats(game) {
    var stats = new Stats();

    stats.setMode(0);

    stats.domElement.style.position = 'absolute';
    stats.domElement.style.right = '0px';
    stats.domElement.style.top = '0px';

    document.body.appendChild(stats.domElement);

    // Monkey patch Phaser's update in order to correctly monitor FPS.
    var oldUpdate = game.update;
    game.update = function() {
      stats.begin();
      oldUpdate.apply(game, arguments);
      stats.end();
    };
  }
}


/*var 
var boot = {};

boot.create = function () {

  if (properties.showStats) {
    addStats(this.game);
  }

  this.game.sound.mute = properties.mute;

  this.game.state.start('preloader');
};

function addStats(game) {

  
}

module.exports = boot;*/
