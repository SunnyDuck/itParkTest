import {GameObjects, Scene} from 'phaser'

export default class Rubin extends GameObjects.Sprite{
    constructor(scene: Scene, x: number, y:number) {
        super(scene, x, y, 'rubin');
        this.scene.add.existing(this)
    }
}