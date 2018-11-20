import Phaser from 'phaser';
import parts from '../parts';

export default class BodyPart extends Phaser.GameObjects.Rectangle {
  constructor({ scene, part }) {
    super(scene, 10, 10, 50, 50, 0x547d8b, 0.8);

    if (!part) {
      throw Error('Part type is missing or does not exist');
    }

    this._bodypartType = part;
    this._isAttached = false;

    // this.setSize(width, height);
    // this.setX(scene.game.config.width / 2 - width / 2);
    // this.setY(scene.game.config.height / 2 - height / 2);
    // this.setFillStyle(0x547d8b, 0.8);

    if (this._bodypartType === parts.ARM) {
      this.setFillStyle(0x547d8b, 0.8);
    } else {
      this.setFillStyle(0x234567, 0.8);
    }

    scene.children.add(this);
  }

  get type() {
    return this._bodypartType;
  }

  get isAttached() {
    return this._isAttached;
  }

  attach() {
    this._isAttached = true;
    this.body.setVelocity(0);
  }
}
