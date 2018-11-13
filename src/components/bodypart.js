import Phaser from 'phaser';
import parts from '../parts';

export default class BodyPart extends Phaser.GameObjects.Graphics {
  constructor(scene, type, bodypartType) {
    super(scene, type);

    if (!parts.includes(bodypartType)) {
      throw Error('Type does not exist.');
    }
    this._bodypartType = bodypartType;
  }

  get type() {
    return this._bodypartType;
  }
}
