const ARM = 0;
const LEG = 1;
const MOUTH = 2;
const EYE = 3;

const parts = { ARM, LEG, MOUTH, EYE };

const randomPart = () => {
  const keys = Object.keys(parts);
  const max = keys.length;
  const randomNumber = Math.floor(Math.random() * Math.floor(max));
  return keys[randomNumber];
};

export { parts, randomPart };
