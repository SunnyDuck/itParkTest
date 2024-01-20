import {GameObjects, Scene} from 'phaser'

export default class FinalScaleBlock extends GameObjects.Rectangle{

    constructor(scene: Scene, x: number, y: number, width: number, height: number, color: number) {
        super(scene, x, y, width, height, color);
        this.setOrigin(0, 0)
        this.scene.add.existing(this)
    }