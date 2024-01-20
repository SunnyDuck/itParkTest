import {GameObjects, Scene} from 'phaser'

export default class ImpactForceScale extends GameObjects.Rectangle{

    constructor(scene: Scene, x: number, y: number, width: number, height: number, color: number) {
        super(scene, x, y, width, height, color);
        this.setOrigin(0, 0)
        this.setRotation(Phaser.Math.DegToRad(180))
        this.scene.add.existing(this)
    }

    intervalId: null | NodeJS.Timeout = null
    randomScale: number

    startForceScale(start: boolean){

        if(!start){
            this.stopForceScale()
            return
        }

        this.intervalId = setInterval(()=> {
            this.randomScale = Math.floor(Math.random() * 173);
            this.scaleChange(this.randomScale)
        }, 500)
    }

    stopForceScale(){
        clearInterval(this.intervalId);
        console.log(this.randomScale / 172 * 100 + '% сила удара')
        this.intervalId = null;
    }

    scaleChange(scale: number) {
        this.scene.tweens.add({
            targets: this,
            height: scale,
            duration: 500,
        })
    }

}