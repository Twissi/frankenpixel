import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'content',
  width: 700,
  height: 700,
  backgroundColor: '#efefef',
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
};
