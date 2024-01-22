import { GameObjects, Scene } from 'phaser'

export default class Scale1 extends GameObjects.Sprite {
    constructor(scene: Scene, x: number, y: number) {
        super(scene, x, y, 'scale-1')
        this.setScale(0.6)
        this.scene.add.existing(this)
    }
}
