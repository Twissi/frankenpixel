import Phaser from 'phaser';

import Mushroom from '../sprites/Mushroom';
import Body from '../components/Body';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }
  init() {}
  preload() {}

  create() {
    let body = new Body({
      scene: this,
    });
    this.add.existing(body);
  }
}
