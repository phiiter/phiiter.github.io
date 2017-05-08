var backGr;
var platforms;
var player;
var cursors;

var score = 0;
var scoreText;

var star;




var play2State = {
    
    create: function() {
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        backGr = game.add.sprite(0, 0, 'backGround');
        game.world.setBounds(0, 0, 10000, 700);
        backGr.width = 10000; backGr.height = 700;
    
    
        //GENERATE PLATFORMS
        platforms = game.add.group();
        platforms.enableBody = true;
        for (var i = 0; i < 100; i++) {
            //  Create a star inside of the 'stars' group
            var ledge = platforms.create(i * 200 + Math.random() * 200, game.world.randomY, 'platform');
            ledge.body.immovable = true;
        }
        ledge = platforms.create(30, game.world.height - 50, 'platform');
        ledge.body.immovable = true;
    
    
        //PLAYER SHIT...
        player = game.add.sprite(32, game.world.height - 150, 'dude');
    
        game.physics.arcade.enable(player);
        player.body.gravity.y = 1700;
        player.body.collideWorldBounds = false;
    
        player.animations.add('run', [1,2,3,4], 10, true);
    
        
        //GOAL STAR
        star = game.add.sprite(game.world.width - 10, game.world.height / 2, 'star');
    
        //ARROW-KEY SETUP
        cursors = game.input.keyboard.createCursorKeys();
        //SCORE TEXT SETUP
        scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#0ff00f' });
        scoreText.fixedToCamera = true;
    
        game.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER);
        
    },
    
    
    update: function() {
    
        //backGr.tilePosition.x += player.body.velocity.x /75;
    
        game.physics.arcade.collide(player, platforms);
        game.physics.arcade.overlap(player, star, this.advance, null, this);
    
    
        player.body.velocity.x = 0;
    
        if (cursors.left.isDown) {
            //  Move to the left
            player.body.velocity.x = -300;

            player.animations.play('run');
        } else if (cursors.right.isDown) {
            //  Move to the right
            player.body.velocity.x = 300;

            player.animations.play('run');
        } else {
            //  Stand still
            player.animations.stop();

            player.frame = 5;
        }
    
        //  Allow the player to jump if they are touching the ground.
        if (cursors.up.isDown && player.body.touching.down) {
            player.body.velocity.y = -1300;
        }
    
        if (!player.body.touching.down) {
            player.animations.stop();
            player.frame = 0;
        }
    
        scoreText.text = 'score: ' + Math.floor( player.x / 10 );

    },
    
    
    advance: function() {
        
        game.state.start('middle2');
        
    }
    
}