import { Scene } from 'phaser';
import tilesetPng from '../../assets/tiles/sokoban_tilesheet.png';
import tilemapJson from '../../assets/maps/first.json';

export class Preload extends Scene
{
    constructor ()
    {
        super('Preload');
    }

    preload ()
    {
        this.load.spritesheet('tileset', tilesetPng);
        this.load.tilemapTiledJSON('tilemap', tilemapJson);
    }

    create ()
    {
        this.scene.start('Game');
    }
}
