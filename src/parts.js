const ARM = 0;
const LEG = 1;
const MUSCLE = 2;
const HEART = 3;

const parts = { ARM, LEG, MUSCLE, HEART };

const randomPart = () => {
  const keys = Object.keys(parts);
  const max = keys.length;
  const randomNumber = Math.floor(Math.random() * Math.floor(max));
  return keys[randomNumber];
};

export { parts, randomPart };
