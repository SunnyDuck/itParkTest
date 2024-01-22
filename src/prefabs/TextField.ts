import {GameObjects, Scene} from 'phaser'

export default class TextField extends GameObjects.Text {

    texts = {
        'greetingsText': 'Привет! проверим твою силу!',
        'gameText': 'Жми на кнопку в нужный момент!',
        'loseText': 'Неплохо! Попробуй еще раз',
        'winText': 'ВОТ ЭТО СИЛА! ТЫ ВЫБИЛ ГЛАВНЫЙ ПРИЗ! Рубин'
    }

    constructor(scene: Scene, x: number, y: number, text: string) {
        super(scene, x, y, this.texts[text]);
        this.scene.add.existing(this)
    }
}