class Play extends Phaser.Scene {
    
    constructor(name, gravity, jumpForce, background) {
        super(name);
        this.name = name;
        this.gravity = gravity;
        this.jump = jumpForce;
        this.background = background;
        this.nextScene = 'menu2';
        this.image;
    }

    init() {
        var player;
        var cursors;
        var score = 0;
        var scoreText;
        var lastY = 680;
        var platforms;
        //var player;
        

        var star;

       

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



        // PLAYER INIT...
        player = this.physics.add.sprite(32, height - 150, 'dude');

        player.body.gravity.y = this.gravity;
        player.body.collideWorldBounds = false;

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

        //player.animations.add('run', [1,2,3,4], 10, true);



        //GENERATE PLATFORMS
        platforms = this.physics.add.staticGroup();
        platforms.enableBody = true;
        const platformDistance = this.gravity < 100 ? 500 : 300;
        for (var i = 1; i < 40; i++) {
            const randomNumber = Math.random();
            var platY = platformY();
            //  Create a star inside of the 'stars' group
            var ledge = platforms.create(i * platformDistance + randomNumber * platformDistance, platY, randomNumber < 0.3 ? 'platform2' : 'platform');
            ledge.body.immovable = true;
            lastY = platY;
            if (i == 39) {
                var ledge = platforms.create(width - 100, platY, 'platform2');
                ledge.body.immovable = true;
            }
        }
        ledge = platforms.create(80, height - 50, 'platform');
        ledge.body.immovable = true;



        //GOAL STAR
        //star = this.add.sprite(width - 80, height / 2, 'star');
        star = this.physics.add.sprite(width - 80, 0, 'star');

        star.body.gravity.y = 100;
        star.body.collideWorldBounds = false;


        //ARROW-KEY SETUP
        cursors = this.input.keyboard.createCursorKeys();
        //SCORE TEXT SETUP
        scoreText = this.add.text(16, 2, 'score: 0', { font: '52px "Micro 5"', fill: '#fff' });
        scoreText.setScrollFactor(0,0);

        this.camera.startFollow(player);

        //RESET dudeFell to false
        dudeFell = false;

    }


    update() {

        //backGr.tilePosition.x += player.body.velocity.x /75;

        //this.physics.arcade.collide(player, platforms);
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(star, platforms);100

        //this.physics.arcade.collide(player, star, this.advance, null, this);
        this.physics.add.collider(player, star, () => this.scene.start(this.nextScene));


        

        player.body.velocity.x = 0;

        if (cursors.left.isDown) {
            //  Move to the left
            player.body.velocity.x = -350;

            player.anims.play('run', true);
        } else if (cursors.right.isDown) {
            //  Move to the right
            player.body.velocity.x = 350;

            player.anims.play('run', true);

            if (player.x > 600 && player.x < 9350) {
                this.image.tilePositionX -= 1;
            }
            
        } else {
            //  Stand still
            player.stop();

            player.anims.play('stand');
        }

        //  Allow the player to jump if they are touching the ground.
        if (cursors.up.isDown && player.body.touching.down) {
            player.body.velocity.y = this.jump;
        }

        if (!player.body.touching.down) {
            player.stop();
            player.anims.play('fly');
        }

        if (star.body.touching.down) {
            star.body.velocity.y = -200;
        }

        scoreText.text = 'score: ' + Math.floor(player.x / 50);

        if (player.y > 800) {
            dudeFell = true;
            this.scene.start('gameOver');
        }

    }

}