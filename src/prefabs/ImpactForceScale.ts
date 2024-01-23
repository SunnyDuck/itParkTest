import { GameObjects, Scene } from 'phaser'

export default class ImpactForceScale extends GameObjects.Rectangle {
    constructor(
        scene: Scene,
        x: number,
        y: number,
        width: number,
        height: number,
        color: number,
    ) {
        super(scene, x, y, width, height, color)
        this.setOrigin(0, 0)
        this.setRotation(Phaser.Math.DegToRad(180))
        this.scene.add.existing(this)
    }

    private intervalId: null | NodeJS.Timeout = null
    private randomScale: number
    tween = this.scene.tweens

    startForceScale(start: boolean) {
        if (!start) {
            this.stopForceScale()
            return
        }

        this.intervalId = setInterval(() => {
            this.randomScale = Math.floor(Math.random() * 173)
            this.scaleChange(this.randomScale)
        }, 500)
    }

    stopForceScale() {
        this.scene.tweens.killTweensOf(this)
        clearInterval(this.intervalId)
        this.intervalId = null
    }

    scaleChange(scale: number) {
        this.tween.add({
            targets: this,
            height: scale,
            duration: 500,
        })
    }

    getResults() {
        return (this.height / 172) * 100
    }
}
