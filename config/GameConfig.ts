import {AUTO, Types} from "phaser";
import PreloadScene from "@/scenes/preload.scene";
import GameScene from "@/scenes/game.scene";

export const GameConfig: Types.Core.GameConfig = {
    type: AUTO,
    parent: 'game-root',
    width: 360,
    height: 640,
    backgroundColor: 'black',
    scene: [
        PreloadScene,
        GameScene
    ],
}