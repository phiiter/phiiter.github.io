class Play extends Phaser.Scene {
    
    constructor(name, gravity, jumpForce, background) {
        super(name);
        this.name = name;
        this.gravity = gravity;
        this.jump = jumpForce;
        this.background = background;
        this.nextScene = 'menu2';

        this.image;
        this.player;
        this.platforms;
        this.star;
        this.cursors;
        this.scoreText;
    }

    init() {
        var score = 0;
        var lastY = 680;
       

        if (this.name === 'play2') {
            this.nextScene = 'menu3';
        } else if (this.name === 'play3') {
            this.nextScene = 'menu4';
        } else if (this.name === 'play4') {
            this.nextScene = 'menu5';
        }

    }

    
    create() {

        console.log(this.name);
        
        const width = 10000;
        const height = vh - 16;

        this.camera = this.cameras.main;
        console.log(this.camera.x);
        this.camera.setBounds(0, 0, width, height);
        
        let centerX = this.cameras.main.width / 2;
        let centerY = this.cameras.main.height / 2;

        //console.log(this.textures.list);

        // set background image
        this.image = this.make.tileSprite({
            x: 0,
            y: 0,
            width: width/1.4,
            height: height,
            scale: 1024 / height,
            key: this.background,
            add: true
        });
        this.image.setOrigin(0,0);
        

        //this.setWorldBounds(0, 0, 10000, 700);
        this.physics.world.setBounds(0, 0, width, height);
        

        this.sound.stopAll();
        var music = this.sound.add('backGroundMusic');
        music.loop = true;
        music.play();



        // this.player INIT...
        this.player = this.physics.add.sprite(32, height - 150, 'dude');

        this.player.body.gravity.y = this.gravity;
        this.player.body.collideWorldBounds = false;

        // create animations
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('dude', { start: 1, end: 4 }),
            frameRate: 16,
            repeat: -1
        });
        this.anims.create({
            key: 'stand',
            frames: [ { key: 'dude', frame: 5 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'fly',
            frames: [ { key: 'dude', frame: 0 } ],
            frameRate: 20
        });

        //this.player.animations.add('run', [1,2,3,4], 10, true);



        //GENERATE this.platforms
        this.platforms = this.physics.add.staticGroup();
        this.platforms.enableBody = true;
        const platformDistance = this.gravity < 100 ? 500 : 300;
        for (var i = 1; i < 40; i++) {
            const randomNumber = Math.random();
            var platY = i === 1 ? 400 : platformY();
            //  Create a star inside of the 'stars' group
            var ledge = this.platforms.create(i * 320 + randomNumber * platformDistance, platY, randomNumber < 0.3 ? 'platform2' : 'platform');
            ledge.body.immovable = true;
            lastY = platY;
            if (i == 39) {
                var ledge = this.platforms.create(width - 100, 400, 'platform2');
                ledge.body.immovable = true;
            }
        }
        ledge = this.platforms.create(80, height - 50, 'platform');
        ledge.body.immovable = true;



        //GOAL STAR
        //star = this.add.sprite(width - 80, height / 2, 'star');
        this.star = this.physics.add.sprite(width - 80, 0, 'star');

        this.star.body.gravity.y = 100;
        this.star.body.collideWorldBounds = false;


        //ARROW-KEY SETUP
        this.cursors = this.input.keyboard.createCursorKeys();
        //SCORE TEXT SETUP
        this.scoreText = this.add.text(16, 2, 'score: 0', { font: '52px "Micro 5"', fill: '#fff' });
        this.scoreText.setScrollFactor(0,0);

        this.camera.startFollow(this.player);

        //RESET dudeFell to false
        dudeFell = false;

    }


    update() {

        //backGr.tilePosition.x += this.player.body.velocity.x /75;

        //this.physics.arcade.collide(this.player, this.platforms);
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.star, this.platforms);100

        //this.physics.arcade.collide(this.player, star, this.advance, null, this);
        this.physics.add.collider(this.player, this.star, () => this.scene.start(this.nextScene));


        

        this.player.body.velocity.x = 0;

        if (this.cursors.left.isDown) {
            //  Move to the left
            this.player.body.velocity.x = -350;

            this.player.anims.play('run', true);
        } else if (this.cursors.right.isDown) {
            //  Move to the right
            this.player.body.velocity.x = 350;

            this.player.anims.play('run', true);

            if (this.player.x > 620 && this.player.x < 9350) {
                this.image.tilePositionX -= 1;
            }
            
        } else {
            //  Stand still
            this.player.stop();

            this.player.anims.play('stand');
        }

        //  Allow the this.player to jump if they are touching the ground.
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.body.velocity.y = this.jump;
        }

        if (!this.player.body.touching.down) {
            this.player.stop();
            this.player.anims.play('fly');
        }

        if (this.star.body.touching.down) {
            this.star.body.velocity.y = -200;
        }

        this.scoreText.text = 'score: ' + Math.floor(this.player.x / 50);

        if (this.player.y > 800) {
            dudeFell = true;
            this.scene.start('gameOver');
        }

    }

}