import { GameObjects, Scene } from 'phaser'

export default class Robot extends GameObjects.Sprite {
    constructor(scene: Scene, x: number, y: number) {
        super(scene, x, y, 'robot_1')
        this.setScale(0.5)
        this.scene.add.existing(this)
    }
}
