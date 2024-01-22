import {GameObjects, Scene} from 'phaser'

const texts = {
    'greetingsText': 'Привет! проверим твою силу!',
    'gameText': 'Жми на кнопку в нужный момент!',
    'loseText': 'Неплохо! Попробуй еще раз',
    'winText': 'ВОТ ЭТО СИЛА! ТЫ ВЫБИЛ ГЛАВНЫЙ ПРИЗ! Рубин'
} as const


export default class TextField extends GameObjects.Text {
    constructor(scene: Scene, x: number, y: number, text: keyof typeof texts) {
        super(scene, x, y, texts[text], {font: '20px Arial'});
        this.scene.add.existing(this)
    }
}