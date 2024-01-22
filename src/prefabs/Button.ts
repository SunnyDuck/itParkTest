import { GameObjects, Scene } from 'phaser'

export default class Button extends GameObjects.Sprite {
    constructor(scene: Scene, x: number, y: number) {
        super(scene, x, y, 'button')
        this.setScale(0.6)
        this.scene.add.existing(this)
    }

    onPressed() {
        setTimeout(() => {
            this.setTexture('button_active')
        }, 500)
    }

    offPressed() {
        this.setTexture('button')
    }
}
