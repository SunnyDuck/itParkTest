import {Scene, Loader} from 'phaser'
import bg_top from '@/assets/bg_top.png'
import button_active from '@/assets/button_active.png'
import button from '@/assets/button.png'
import hammer from '@/assets/hammer.png'
import layer_glow from '@/assets/layer_glow.png'
import measure_main from '@/assets/measure_main.png'
import prize_glow from '@/assets/prize_glow.png'
import robot_1 from '@/assets/robot_1.png'
import robot_2 from '@/assets/robot_2.png'
import robot_3 from '@/assets/robot_3.png'
import scale from '@/assets/scale.png'
import scale1 from '@/assets/scale-1.png'
import rubin from '@/assets/rubin.png'
import newGameButton from '@/assets/newGameButton.png'
import hitButton from '@/assets/hitButton.png'
import rectangle1col from '@/assets/Rectangles/Rectangle 109.png'
import rectangle2col from '@/assets/Rectangles/Rectangle 110.png'
import rectangle3col from '@/assets/Rectangles/Rectangle 111.png'
import rectangle4col from '@/assets/Rectangles/Rectangle 112.png'
import rectangle5col from '@/assets/Rectangles/Rectangle 113.png'
import rectangle6col from '@/assets/Rectangles/Rectangle 114.png'
import rectangle7col from '@/assets/Rectangles/Rectangle 115.png'
import rectangle1 from '@/assets/Rectangles/Rectangle 109 (1).png'
import rectangle2 from '@/assets/Rectangles/Rectangle 110 (1).png'
import rectangle3 from '@/assets/Rectangles/Rectangle 111 (1).png'
import rectangle4 from '@/assets/Rectangles/Rectangle 112 (1).png'
import rectangle5 from '@/assets/Rectangles/Rectangle 113 (1).png'
import rectangle6 from '@/assets/Rectangles/Rectangle 114 (1).png'
import rectangle7 from '@/assets/Rectangles/Rectangle 115 (1).png'
import rubinBackground from '@/assets/Rectangles/RubinBackground.png'

export default class PreloadScene extends Scene {
    constructor() {
        super('PreloadScene');
    }

    preload(){

        const progressBar = this.add.graphics();
        const progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(55, 300, 250, 50);

        this.load.on('progress', function (value: number) {
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(65, 310, 230 * value, 30);
        });

        this.load.image('bg_top', bg_top)
        this.load.image('button', button)
        this.load.image('button_active', button_active)
        this.load.image('hammer', hammer)
        this.load.image('layer_glow', layer_glow)
        this.load.image('measure_main', measure_main)
        this.load.image('prize_glow', prize_glow)
        this.load.image('robot_1', robot_1)
        this.load.image('robot_2', robot_2)
        this.load.image('robot_3', robot_3)
        this.load.image('scale', scale)
        this.load.image('scale-1', scale1)
        this.load.image('rubin', rubin)
        this.load.image('newGameButton', newGameButton)
        this.load.image('hitButton', hitButton)
        this.load.image('rectangle1col', rectangle1col)
        this.load.image('rectangle2col', rectangle2col)
        this.load.image('rectangle3col', rectangle3col)
        this.load.image('rectangle4col', rectangle4col)
        this.load.image('rectangle5col', rectangle5col)
        this.load.image('rectangle6col', rectangle6col)
        this.load.image('rectangle7col', rectangle7col)
        this.load.image('rectangle1', rectangle1)
        this.load.image('rectangle2', rectangle2)
        this.load.image('rectangle3', rectangle3)
        this.load.image('rectangle4', rectangle4)
        this.load.image('rectangle5', rectangle5)
        this.load.image('rectangle6', rectangle6)
        this.load.image('rectangle7', rectangle7)
        this.load.image('rubinBackground', rubinBackground)

        for (let i = 0; i < 500; i++) {
            this.load.image('logo'+i, rubinBackground);
        }

    }

    create() {
        this.scene.start('GameScene')
    }
}