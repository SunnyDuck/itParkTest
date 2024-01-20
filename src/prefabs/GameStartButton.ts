import {GameObjects, Scene} from 'phaser'
import Hammer from "@/prefabs/Hammer";
import ImpactForceScale from "@/prefabs/ImpactForceScale";
import Button from "@/prefabs/Button";

export default class GameStartButton extends GameObjects.Sprite{

    private _isStarted: string = 'wait'

    constructor(scene: Scene, x: number, y:number) {
        super(scene, x, y, 'newGameButton')
        this.setInteractive()
        this.scene.add.existing(this)
    }

    hideGameButton(){
        const timeline = this.scene.add.timeline({
            tween: {
                targets: this,
                duration: 0,
                alpha: 0
            }
        })

        timeline.play()

        setTimeout(() => {
            this.alpha = 1
            this.setTexture('newGameButton')
        }, 1500)
    }

    gameStart(hammer: Hammer, impactForceScale: ImpactForceScale, button: Button) {

        if(this._isStarted === 'wait'){
            this._isStarted = 'firstStart'
        }

        switch (this._isStarted) {
            case 'firstStart':
                hammer.hammerHitPosition()
                this.setTexture('hitButton')
                impactForceScale.startForceScale(true)
                this._isStarted = 'hit'
                break
            case 'start':
                hammer.hammerStartPosition()
                this.setTexture('hitButton')
                impactForceScale.startForceScale(true)
                button.offPressed()
                this._isStarted = 'hit'
                break
            case 'hit':
                this.hideGameButton()
                impactForceScale.startForceScale(false)
                hammer.hammerHit()
                button.onPressed()
                this._isStarted = 'start'
                console.log('ok')
                break
        }
    }
}