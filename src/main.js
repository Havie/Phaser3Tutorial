// Bring in the phaser library
import Phaser from 'phaser'

import CONFIG from './config.js'
// Bring in base example scene
import ExampleScene from './scenes/Example.js'
import StartScene from './scenes/Start.js'

const config = {
  // Configure Phaser graphics settings
  type: Phaser.AUTO,
  scale:{
    parent: 'game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    width: CONFIG.DEFAULT_WIDTH,
    height: CONFIG.DEFAULT_HEIGHT
  },
  // Configure physics settings
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: CONFIG.DEFAULT_GRAVITY }
    }
  },

}

// Initialize the base phaser game object (must always be done once)
const game = new Phaser.Game(config)

// Add an auto starting ex scene
game.scene.add('StartScene', StartScene)
game.scene.add('ExampleScene', ExampleScene)
game.scene.start('StartScene') // instead of doing bool as a third param in add()

/// CNTROL+TILDE for CMD prompt
/// npm install
/// npm run dev


