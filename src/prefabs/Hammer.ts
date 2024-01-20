import {GameObjects, Scene} from 'phaser'

export default class Hammer extends GameObjects.Sprite{

    constructor(scene: Scene, x: number, y: number) {
        super(scene, x, y, 'hammer');
        this.setScale(0.6)
        this.angle = -45
        this.scene.add.existing(this)
    }

    hammerStartPosition(){
        this.scene.tweens.add({
            targets: this,
            angle: '+=90',
            y: 330,
            x: 260
        })
    }

    hammerHitPosition(){
        this.scene.tweens.add({
            targets: this,
            angle: '+=45',
                y: 330
        })
    }

    hammerHit(){
        this.scene.tweens.add({
            targets: this,
            angle: '-=90',
            x: 210,
            duration: 1000,
        })
    }

}