import Bodypart from './Bodypart';
import { randomPart } from '../parts';

export default class Player {
  constructor({ scene, physics, monster }) {
    this._currentScene = scene;
    this._physics = physics;
    this._monster = monster;
    this._collider = null;

    this._currentBodyPart = this._createBodyPart();
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
      this._monster,
      this._collision,
      null,
      this
    );
  }

  _createBodyPart() {
    const part = randomPart();
    const bodypart = (this._currentBodyPart = new Bodypart({
      scene: this._currentScene,
      part: part,
    }));
    return bodypart;
  }

  _collision() {
    console.log('collision');
    this._currentBodyPart.attach();
    this._collider.destroy();

    this._createBodyPart();
    this._controlBodyPart(this._currentBodyPart);
  }
}
