import { Game as MainGame } from './scenes/Game';
import { Boot } from './scenes/Boot';
import { Preload } from './scenes/Preload';
import { AUTO, Game,Types } from 'phaser';

const config: Types.Core.GameConfig = {
    type: AUTO,
    width: 512,
    height: 512,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scene: [
        Boot,
        Preload,
        MainGame
    ]
};

const StartGame = (parent: string) => {
    return new Game({ ...config, parent });
}

export default StartGame;
