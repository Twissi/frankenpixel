import Bodypart from './Bodypart';
import { randomPart } from '../parts';

export default class Player {
  constructor({ scene, physics, group }) {
    this._currentScene = scene;
    this._physics = physics;
    this._group = group;
    this._collider = null;

    this._currentBodyPart = this._createNewBodyPart();
    this._controlBodyPart(this._currentBodyPart);
  }

  get currentBodyPart() {
    return this._currentBodyPart;
  }

  _controlBodyPart(bodyPart) {
    this._physics.add.existing(bodyPart);
    bodyPart.body.setCollideWorldBounds(true);

    this._collider = this._physics.add.overlap(
      bodyPart,
      this._group,
      this._collision,
      null,
      this
    );
  }

  _createNewBodyPart() {
    const part = randomPart();
    const bodypart = new Bodypart({
      scene: this._currentScene,
      part: part,
    });
    return bodypart;
  }

  _collision() {
    console.log('collision');
    console.log(this._group.children.size);

    if (!this._currentBodyPart) {
      return;
    }
    this._currentBodyPart.pauseMovement();
    this._collider.destroy();
    this._group.add(this._currentBodyPart);

    this._currentBodyPart = null;

    if (!this._currentBodyPart && this._group.children.size < 30) {
      this._currentBodyPart = this._createNewBodyPart();
      this._controlBodyPart(this._currentBodyPart);
    }
  }
}
