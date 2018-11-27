import Phaser from 'phaser';

export default class MonsterGroup extends Phaser.GameObjects.Group {
  constructor({ scene, children }) {
    super(scene, children);

    this.collideWorldBounds = true;
  }
}
