import Phaser from 'phaser';
import Monster from '../components/Monster';
import MonsterGroup from '../components/MonsterGroup';
import Player from '../components/Player';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }
  init() {}
  preload() {
    this.load.image('eye', 'assets/images/eye.png');
    this.load.image('mouth', 'assets/images/mouth.png');
    this.load.image('leg', 'assets/images/leg.png');
    this.load.image('arm', 'assets/images/arm1.png');
    this.load.image('heart', 'assets/images/heart3.png');
  }

  create() {
    this.monster = new Monster({
      scene: this,
    });
    this.physics.add.existing(this.monster, true);

    this.group = new MonsterGroup({ scene: this });

    this.group.add(this.monster);

    this.player = new Player({
      scene: this,
      physics: this.physics,
      monster: this.monster,
      group: this.group,
    });

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    const bodyPart = this.player.currentBodyPart;
    if (bodyPart) {
      bodyPart.body.setVelocity(50, 50);

      if (this.cursors.left.isDown) {
        bodyPart.body.setVelocityX(-300);
      } else if (this.cursors.right.isDown) {
        bodyPart.body.setVelocityX(300);
      }
      if (this.cursors.up.isDown) {
        bodyPart.body.setVelocityY(-300);
      } else if (this.cursors.down.isDown) {
        bodyPart.body.setVelocityY(300);
      }
    }
  }
}
