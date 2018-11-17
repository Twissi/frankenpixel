import Phaser from 'phaser';
import Monster from '../components/Monster';
import Bodypart from '../components/Bodypart';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }
  init() {}
  preload() {}

  create() {
    this.monster = new Monster({
      scene: this,
    });
    this.player = new Bodypart({
      scene: this,
      part: 'ARM',
    });

    this.cursors = this.input.keyboard.createCursorKeys();

    this.physics.world.enable(this.monster);
    this.physics.world.enable(this.player);

    // this.physics.world.wrap(this.monster, 0);
    // this.physics.world.wrap(this.player, 0);

    this.player.body.setCollideWorldBounds(true);
    this.physics.add.overlap(
      this.player,
      this.monster,
      this.collision,
      false,
      this
    );
  }

  update() {
    this.player.body.setVelocity(0);
    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-300);
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(300);
    }
    if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-300);
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(300);
    }
  }

  collision() {
    console.log('collision');
  }
}
