import Phaser from 'phaser'
import CONFIG from '../config.js'

// Witch sprite object that adds itself to the given scene
class HatGuySprite extends Phaser.Physics.Arcade.Sprite {
  constructor (scene, x, y) {
    // Pass parameters to parent's constructor
      super(scene, x, y, 'hatGuy', 1)

    // Initialize animation info if it hasn't been already
      if (!HatGuySprite.animInitialized) {
          HatGuySprite.setupAnim(scene)
    }

    // Enable physics
    scene.physics.world.enableBody(this, Phaser.Physics.Arcade.DYNAMIC_BODY)
    this.setImmovable(true) //Player controlled , not moved by physics
    this.body.setAllowGravity(false) 
    this.body.setCollideWorldBounds(true)

    // Add self to the given scene
    scene.add.existing(this)
  }
    printMsg(msg) {
        console.log("HatGuy Says: " + msg);
    }

    move(x, y) {
        if (Math.abs(x) > 0) {
            if (this.facingForward) {
                this.anims.play('hatGuyIDLE', true)
            } else {
                this.anims.play('hatGuyIDLE', true)
            }
        } else {
            if (y < 0) {
                this.facingForward = false
                this.anims.play('hatGuyIDLE', true)
            } else if (y > 0) {
                this.facingForward = true
                this.anims.play('hatGuyIDLE', true)
            } else {
                if (this.facingForward) {
                    this.anims.play('hatGuyIDLE', true)
                } else {
                    this.anims.play('hatGuyIDLE', true)
                }
            }
        }

        this.setVelocity(x * CONFIG.WALK_SPEED, y * CONFIG.WALK_SPEED)
    }
}

// Sprite animation configuration as static members
// of the WitchSprite class
HatGuySprite.animInitialized = false
HatGuySprite.setupAnim = (scene) => {
  // Create the animations using the global anim controller

  scene.anims.create({
      key: 'hatGuyIDLE',
    frameRate: 6,
    repeat: -1,
      frames: scene.anims.generateFrameNumbers('hatGuy', { start: 1, end: 4 })
  })

  // Indicate that the animation has been setup
    HatGuySprite.animInitialized = true
}

// Export class for access in other classes
export default HatGuySprite
