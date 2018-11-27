import Phaser from 'phaser';
import { parts } from '../parts';

export default class Monster extends Phaser.GameObjects.Group {
  constructor({ scene, children }) {
    super(scene, children);

    this.collideWorldBounds = true;
  }
}
