import Phaser from 'phaser';
import { parts } from '../parts';

export default class Monster extends Phaser.GameObjects.Rectangle {
  constructor({ scene, options }) {
    let width = 100;
    let height = 100;

    super(
      scene,
      scene.game.config.width / 2,
      scene.game.config.height / 2,
      width,
      height,
      0xd1edee,
      0.8
    );

    this._initBodyPart = parts.HEART;
    this._bodyPartList = [];

    // this.setSize(width, height);
    // this.setX(scene.game.config.width / 2 - width / 2);
    // this.setY(scene.game.config.height / 2 - height / 2);
    //this.setFillStyle(0xd1edee, 0.8);

    scene.children.add(this);
  }

  get initBodyPart() {
    return this._initBodyPart;
  }
  get position() {
    return { x: this._x, y: this._y };
  }
  set position({ x, y }) {
    this._x = x;
    this._y = y;
  }

  addBodyPart(bodyPart) {
    this._bodyPartList.push(bodyPart);
  }
}
