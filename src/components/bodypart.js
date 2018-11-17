import Phaser from 'phaser';
import parts from '../parts';

export default class BodyPart extends Phaser.GameObjects.Graphics {
  constructor({ scene, part, options }) {
    super(scene, options);

    if (!part) {
      throw Error('Part type is missing or does not exist');
    }
    this._bodypartType = part;
    this._initWidth = 50;
    this._initHeight = 50;

    this._x = 0;
    this._y = 0;

    this.fillRect(this._x, this._y, this._initWidth, this._initHeight);
    this.fillStyle(0x547d8b, 0.8);

    scene.children.add(this);
  }

  get type() {
    return this._bodypartType;
  }
}
