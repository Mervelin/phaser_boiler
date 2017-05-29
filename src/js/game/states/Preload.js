export default class Preload extends Phaser.State {
  constructor() {
    super();
    this.background = null;
	  this.preloadBar = null;

	  this.ready = false;
  }

  preload() {
    this.background = this.add.sprite(0, 0, 'loading_bg');
		this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloader');
    this.preloadBar.anchor.setTo(0.5, 0.5);

    this.load.setPreloadSprite(this.preloadBar);

    //do all your loading here
    //this.load.pack('level1', 'assets/assetPack.json', null, this);
    this.load.image('logo', 'assets/images/phaser.png');

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
  }

  create() {
    this.preloadBar.cropEnabled = false;
  }

  update() {
    //if (this.cache.isSoundDecoded('titleMusic') && this.ready) {
      this.game.state.start('game');
    //}
  }

  onLoadComplete() {
    this.ready = true;
  }
}

/*var preloader = {};

preloader.preload = function () {
  this.game.load.image('logo', 'images/phaser.png');
};

preloader.create = function () {
  this.game.state.start('game');
};

module.exports = preloader;
*/