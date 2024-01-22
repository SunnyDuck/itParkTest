import { GameConfig } from '../config/GameConfig'

const phaserGame = new Phaser.Game(GameConfig)
// eslint-disable-next-line
;(window as any).game = phaserGame

export const launchGame = () => {
    document.getElementById('root')
    phaserGame.scene.start('PreloadScene')
}
