import {GameObjects, Scene} from 'phaser'

export default class GameBackground extends GameObjects.Sprite{
    constructor(scene: Scene, x: number, y:number) {
        super(scene, x, y, 'bg_top');
        this.setOrigin(0, 0)
        this.setScale(0.5)
        this.scene.add.existing(this)
    }
}