import Phaser from 'phaser';
import { parts } from '../parts';

export default class BodyPart extends Phaser.GameObjects.Image {
  constructor({ scene, part }) {
    if (parts[part] === parts.ARM) {
      super(scene, 100, 75, 'arm');
    }
    if (parts[part] === parts.LEG) {
      super(scene, 75, 75, 'leg');
    }
    if (parts[part] === parts.MOUTH) {
      super(scene, 50, 25, 'mouth');
    }
    if (parts[part] === parts.EYE) {
      super(scene, 25, 25, 'eye');
    }

    if (!part) {
      throw Error('Part type is missing or does not exist');
    }

    scene.children.add(this);
  }

  pauseMovement() {
    this.body.setVelocity(0);
  }

  rotate() {
    this.setAngle(this.angle + 90);
  }
}
