import {Scene} from "phaser";
import GameBackground from "@/prefabs/GameBackground";
import MeasureMain from "@/prefabs/MeasureMain";
import Rubin from "@/prefabs/Rubin";
import Scale from "@/prefabs/Scale";
import Scale1 from "@/prefabs/Scale1";
import Robot from "@/prefabs/Robot";
import Button from "@/prefabs/Button";
import Hammer from "@/prefabs/Hammer";
import ImpactForceScale from "@/prefabs/ImpactForceScale";
import GameStartButton from "@/prefabs/GameStartButton";
import ScaleBlock from "@/prefabs/scaleBlock";
import LayerGlow from "@/prefabs/layerGlow";
import TextField from "@/prefabs/TextField";

export default class GameScene extends Scene {
    constructor() {
        super('GameScene')
    }

    create(){
        const background = new GameBackground(this, 0, 0)
        const measureMain = new MeasureMain(this, 60,15)
        const rubinBackground = new ScaleBlock(this, 182, 60, 'rubinBackground')
        const prizeGlow = new LayerGlow(this, 180, 55)
        const rubin = new Rubin(this, 181,60)
        const scale = new Scale(this, 60, 520)
        const impactForceScale = new ImpactForceScale(this, 82, 606, 44, 0, 0x00ff00) //height от 0 до 172
        const scale1 = new Scale1(this, 60,520)
        const robot = new Robot(this, 310, 565 )
        const rectangle1 = new ScaleBlock(this, 182, 115, 'rectangle1')
        const rectangle2 = new ScaleBlock(this, 182, 135, 'rectangle2')
        const rectangle3 = new ScaleBlock(this, 182, 162, 'rectangle3')
        const rectangle4 = new ScaleBlock(this, 182, 192, 'rectangle4')
        const rectangle5 = new ScaleBlock(this, 182, 222, 'rectangle5')
        const rectangle6 = new ScaleBlock(this, 182, 265, 'rectangle6')
        const rectangle7 = new ScaleBlock(this, 182, 310, 'rectangle7')
        const button = new Button(this, 181,380)
        const hammer = new Hammer(this, 260, 370)
        const gameStartButton = new GameStartButton(this, 180, 592)
        //const textField = new TextField(this, 20, 20, 'greetingsText')
        gameStartButton.on('pointerdown', () =>
            gameStartButton.gameStart(
                hammer,
                impactForceScale,
                button,
                rectangle1,
                rectangle2,
                rectangle3,
                rectangle4,
                rectangle5,
                rectangle6,
                rectangle7,
                robot,
                prizeGlow
            ))
        console.log('All is okey!')
    }
}