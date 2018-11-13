import BodyPart from './Bodypart';

export default class Muscle extends BodyPart {
  constructor(scene, type) {
    super(scene, type, BodyPart.Muscle);
  }
}
