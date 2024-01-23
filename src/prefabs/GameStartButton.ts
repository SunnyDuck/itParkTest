import { GameObjects, Scene } from 'phaser'
import Hammer from '@/prefabs/Hammer'
import ImpactForceScale from '@/prefabs/ImpactForceScale'
import Button from '@/prefabs/Button'
import ScaleBlock from '@/prefabs/scaleBlock'
import Robot from '@/prefabs/Robot'
import LayerGlow from '@/prefabs/layerGlow'
import TextField from '@/prefabs/TextField'

export default class GameStartButton extends GameObjects.Sprite {
    private started: string = 'wait'

    constructor(scene: Scene, x: number, y: number) {
        super(scene, x, y, 'newGameButton')
        this.setInteractive()
        this.scene.add.existing(this)
    }

    hideGameButton() {
        const timeline = this.scene.add.timeline({
            tween: {
                targets: this,
                duration: 0,
                alpha: 0,
            },
        })

        timeline.play()

        setTimeout(() => {
            this.alpha = 1
            this.setTexture('newGameButton')
        }, 1500)
    }

    rectanglesColorChangerEnd(
        rectangles: ScaleBlock[],
        result: number,
        robot: Robot,
        layerGlow: LayerGlow,
        textField: TextField,
    ) {
        if (result <= 35) rectangles[6].setTexture(`rectangle${7}col`)
        else if (result <= 55) {
            for (let i = rectangles.length - 1; i > 4; i--) {
                rectangles[i].setTexture(`rectangle${i + 1}col`)
            }
            robot.setTexture('robot_2')
            textField.changeText('loseText')
        } else if (result <= 70) {
            for (let i = rectangles.length - 1; i > 3; i--) {
                rectangles[i].setTexture(`rectangle${i + 1}col`)
            }
            robot.setTexture('robot_2')
            textField.changeText('loseText')
        } else if (result <= 80) {
            for (let i = rectangles.length - 1; i > 2; i--) {
                rectangles[i].setTexture(`rectangle${i + 1}col`)
            }
            robot.setTexture('robot_2')
            textField.changeText('loseText')
        } else if (result <= 90) {
            for (let i = rectangles.length - 1; i > 1; i--) {
                rectangles[i].setTexture(`rectangle${i + 1}col`)
            }
            robot.setTexture('robot_2')
            textField.changeText('loseText')
        } else if (result <= 95) {
            for (let i = rectangles.length - 1; i > 0; i--) {
                rectangles[i].setTexture(`rectangle${i + 1}col`)
            }
            robot.setTexture('robot_2')
            textField.changeText('loseText')
        } else {
            for (let i = 0; i < rectangles.length; i++) {
                rectangles[i].setTexture(`rectangle${i + 1}col`)
            }
            robot.setTexture('robot_3')
            layerGlow.layerGlow()
            textField.changeText('winText')
        }
    }
    rectanglesColorChangerStart(
        rectangles: ScaleBlock[],
        robot: Robot,
        layerGlow: LayerGlow,
        textField: TextField,
    ) {
        for (let i = 0; i < rectangles.length; i++) {
            rectangles[i].setTexture(`rectangle${i + 1}`)
        }
        robot.setTexture('robot_1')
        layerGlow.setGlowAlpha(0)
        textField.changeText('gameText')
    }
    gameStart(
        hammer: Hammer,
        impactForceScale: ImpactForceScale,
        button: Button,
        rectangles: ScaleBlock[],
        robot: Robot,
        layerGlow: LayerGlow,
        textField: TextField,
    ) {
        if (this.started === 'wait') {
            this.started = 'firstStart'
        }

        switch (this.started) {
            case 'firstStart':
                hammer.hammerHitPosition()
                this.setTexture('hitButton')
                impactForceScale.startForceScale(true)
                this.started = 'hit'
                textField.changeText('gameText')
                break
            case 'start':
                hammer.hammerStartPosition()
                this.setTexture('hitButton')
                impactForceScale.startForceScale(true)
                button.offPressed()
                this.started = 'hit'
                this.rectanglesColorChangerStart(
                    rectangles,
                    robot,
                    layerGlow,
                    textField,
                )
                break
            case 'hit':
                this.hideGameButton()
                impactForceScale.startForceScale(false)
                hammer.hammerHit()
                button.onPressed()
                this.started = 'start'
                this.rectanglesColorChangerEnd(
                    rectangles,
                    impactForceScale.getResults(),
                    robot,
                    layerGlow,
                    textField,
                )
                break
        }
    }
}
