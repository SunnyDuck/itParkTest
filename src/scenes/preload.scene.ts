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

export default class PreloadScene extends Scene {
    constructor() {
        super('PreloadScene');
    }

    preload(){
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
    }

    create() {
        this.scene.start('GameScene');
    }
}