import {GameObjects, Scene} from 'phaser'
import Hammer from "@/prefabs/Hammer";
import ImpactForceScale from "@/prefabs/ImpactForceScale";
import Button from "@/prefabs/Button";
import ScaleBlock from "@/prefabs/scaleBlock";
import Robot from "@/prefabs/Robot";
import LayerGlow from "@/prefabs/layerGlow";

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

    rectanglesColorChangerEnd(rec1: ScaleBlock, rec2: ScaleBlock, rec3: ScaleBlock, rec4: ScaleBlock, rec5: ScaleBlock, rec6: ScaleBlock, rec7: ScaleBlock, result: number, robot: Robot, layerGlow: LayerGlow){
        if(result <= 35) rec7.setTexture('rectangle7col')
        else if(result <= 55){
            rec7.setTexture('rectangle7col')
            rec6.setTexture('rectangle6col')
            robot.setTexture('robot_2')
        }
        else if(result <= 70){
            rec7.setTexture('rectangle7col')
            rec6.setTexture('rectangle6col')
            rec5.setTexture('rectangle5col')
            robot.setTexture('robot_2')
        }
        else if(result <= 82){
            rec7.setTexture('rectangle7col')
            rec6.setTexture('rectangle6col')
            rec5.setTexture('rectangle5col')
            rec4.setTexture('rectangle4col')
            robot.setTexture('robot_2')
        }
        else if(result <= 92){
            rec7.setTexture('rectangle7col')
            rec6.setTexture('rectangle6col')
            rec5.setTexture('rectangle5col')
            rec4.setTexture('rectangle4col')
            rec3.setTexture('rectangle3col')
            robot.setTexture('robot_2')
        }
        else if(result <= 98){
            rec7.setTexture('rectangle7col')
            rec6.setTexture('rectangle6col')
            rec5.setTexture('rectangle5col')
            rec4.setTexture('rectangle4col')
            rec3.setTexture('rectangle3col')
            rec2.setTexture('rectangle2col')
            robot.setTexture('robot_2')
        }
        else{
            rec7.setTexture('rectangle7col')
            rec6.setTexture('rectangle6col')
            rec5.setTexture('rectangle5col')
            rec4.setTexture('rectangle4col')
            rec3.setTexture('rectangle3col')
            rec2.setTexture('rectangle2col')
            rec1.setTexture('rectangle1col')
            robot.setTexture('robot_3')
            layerGlow.layerGlow()
        }
    }
    rectanglesColorChangerStart(rec1: ScaleBlock, rec2: ScaleBlock, rec3: ScaleBlock, rec4: ScaleBlock, rec5: ScaleBlock, rec6: ScaleBlock, rec7: ScaleBlock, robot: Robot, layerGlow: LayerGlow){
        rec7.setTexture('rectangle7')
        rec6.setTexture('rectangle6')
        rec5.setTexture('rectangle5')
        rec4.setTexture('rectangle4')
        rec3.setTexture('rectangle3')
        rec2.setTexture('rectangle2')
        rec1.setTexture('rectangle1')
        robot.setTexture('robot_1')
        layerGlow.setGlowAlpha(0)
    }
    gameStart(hammer: Hammer, impactForceScale: ImpactForceScale, button: Button, rec1: ScaleBlock, rec2: ScaleBlock, rec3: ScaleBlock, rec4: ScaleBlock, rec5: ScaleBlock, rec6: ScaleBlock, rec7: ScaleBlock, robot: Robot, layerGlow: LayerGlow) {

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
                this.rectanglesColorChangerStart(
                    rec1,
                    rec2,
                    rec3,
                    rec4,
                    rec5,
                    rec6,
                    rec7,
                    robot,
                    layerGlow
                )
                break
            case 'hit':
                this.hideGameButton()
                impactForceScale.startForceScale(false)
                hammer.hammerHit()
                button.onPressed()
                this._isStarted = 'start'
                this.rectanglesColorChangerEnd(
                    rec1,
                    rec2,
                    rec3,
                    rec4,
                    rec5,
                    rec6,
                    rec7,
                    impactForceScale.getResults(),
                    robot,
                    layerGlow
                )
                break
        }
    }
}