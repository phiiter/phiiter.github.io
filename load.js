class Load extends Phaser.Scene {
    constructor() {
        super('load');
    }

    preload() {
        let centerX = this.cameras.main.width / 2;
        let centerY = this.cameras.main.height / 2;

        var loading = this.add.text(centerX, centerY, 'loading . . .', { fontSize: 50, fill: '#ff0000', fontFamily: '"Micro 5"' }).setOrigin(0.5);

        this.load.image('backGround1', "assets/evening.png");
        this.load.image('backGround2', "assets/night.png");
        this.load.image('backGround3', "assets/day.png");
        this.load.image('backGround4', "assets/evening.png");
        this.load.image('backGroundMenu', "assets/city20.jpg")
        this.load.image('platform', "assets/brick.png");
        this.load.image('platform2', "assets/brick2.png");
        this.load.spritesheet('dude', "assets/dude.png", {
            frameWidth: 64,
            frameHeight: 64,
            // startFrame: startFrame,
            // endFrame: endFrame,
            // margin: margin,
            // spacing: spacing
        });
        this.load.image('star', "assets/coal.png");
        this.load.audio('backGroundMusic', ["assets/Star Commander1.mp3", "assets/Star_Commander1.ogg"]);
        this.load.image('backGroundM1', "assets/middle1_tausta.jpg");
        this.load.image('backGroundM2', "assets/middle2_tausta.jpg");
        this.load.image('backGroundM3', "assets/middle3_tausta.jpg");
        this.load.image('gameOverBackGround', "assets/city20.jpg");
        this.load.audio('gameOverMusic', ["assets/Nighttime-Escape.mp3", "assets/Nighttime-Escape.ogg"]);

    }

    create() {
        
        
        console.log(this.textures.list);
        music = this.sound.add('backGroundMusic');
        music.play();
        this.scene.start('menu');
    }

}
