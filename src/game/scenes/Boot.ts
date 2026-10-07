import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        //загрузить бг
    }

    create ()
    {
        this.scene.start('Preload');
    }
}
