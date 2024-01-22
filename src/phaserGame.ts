import { Game, Types, AUTO } from 'phaser'
import PreloadScene from "@/scenes/preload.scene";
import GameScene from "@/scenes/game.scene";
import {GameConfig} from "../config/GameConfig";

const phaserGame = new Phaser.Game(GameConfig);
(window as any).game = phaserGame

export const launchGame = () => {
    document.getElementById('root')
    phaserGame.scene.start('PreloadScene')
}