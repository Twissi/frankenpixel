import Bodypart from './Bodypart';

export default class Player {
  constructor({ scene, physics, monster }) {
    this._currentScene = scene;
    this._physics = physics;
    this._monster = monster;
    this._collider = null;

    this._currentBodyPart = new Bodypart({
      scene: this._currentScene,
      part: 'ARM',
    });

    this._takeOver(this._currentBodyPart);
  }

  get currentBodyPart() {
    return this._currentBodyPart;
  }

  _takeOver(bodyPart) {
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

  // get nextObject() {
  // }

  // nextBodyPart() {
  //   this._currentBodyPart = new Bodypart({
  //     scene: this._currentScene,
  //     part: 'LEG',
  //   });
  // }

  _collision() {
    console.log('collision');
    this._currentBodyPart.attach();
    this._collider.destroy();

    this._currentBodyPart = new Bodypart({
      scene: this._currentScene,
      part: 'LEG',
    });

    this._takeOver(this._currentBodyPart);
  }
}
