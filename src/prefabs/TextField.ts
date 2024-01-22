import { GameObjects, Scene } from 'phaser'

const texts = {
    greetingsText: 'Привет! \nпроверим твою силу!',
    gameText: 'Жми на кнопку \nв нужный момент!',
    loseText: 'Неплохо! \nПопробуй еще раз',
    winText: 'ВОТ ЭТО СИЛА! \nТЫ ВЫБИЛ ГЛАВНЫЙ ПРИЗ! \nРубин',
} as const

export default class TextField extends GameObjects.Text {
    constructor(scene: Scene, x: number, y: number, key: keyof typeof texts) {
        super(scene, x, y, texts[key], {
            fontFamily: 'Roboto',
            fontSize: '16px',
            align: 'center',
            wordWrap: {
                width: 160,
            },
        })
        this.scene.add.existing(this)
    }

    changeText(key: keyof typeof texts) {
        this.setText(texts[key])
    }
}
