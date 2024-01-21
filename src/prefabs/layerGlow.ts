import {GameObjects, Scene} from 'phaser'

export default class LayerGlow extends GameObjects.Sprite {

    constructor(scene: Scene, x: number, y: number) {
        super(scene, x, y, 'layer_glow')
        this.setScale(0.5)
        this.setAlpha(0)
        this.scene.add.existing(this)
    }

    layerGlow(){
        this.setAlpha(1)
        this.scene.tweens.add({
            targets: this,
            texture: 'prize_glow',
            duration: 700,
            repeat: -1,
        });
    }

    setGlowAlpha(value: number){
        this.setAlpha(value)
    }

}