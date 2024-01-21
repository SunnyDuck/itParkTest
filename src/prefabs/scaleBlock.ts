import {GameObjects, Scene} from 'phaser'

export default class ScaleBlock extends GameObjects.Sprite {

    constructor(scene: Scene, x: number, y: number, skin: string) {
        super(scene, x, y, skin);
        this.setScale(1)
        this.scene.add.existing(this)
    }
}