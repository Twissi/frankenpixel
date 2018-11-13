import Phaser from 'phaser';
import parts from '../parts';

export default class Body extends Phaser.GameObjects.Graphics {
  constructor({ scene, options }) {
    super(scene, options);

    this._initBodyPart = parts.HEART;
    this._bodyPartList = [];
    this._initWidth = 100;
    this._initHeight = 100;

    this._x = scene.game.config.width / 2 - this._initWidth / 2;
    this._y = scene.game.config.height / 2 - this._initHeight / 2;

    this.fillRect(this._x, this._y, this._initWidth, this._initHeight);
    this.fillStyle(0xff0000, 0.8);
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
