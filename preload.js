var game = new Phaser.Game(1000, 700, Phaser.AUTO, '', { preload: preload, create: create, update: update });



function preload() {
    game.load.image('backGround', "back.jpg");
    game.load.image('platform', "plat.png");
    game.load.spritesheet('dude', "dude.png", 64, 64);
}

var platforms;
var player;
var cursors;

var score = 0;
var scoreText;



function create() {
        
    game.physics.startSystem(Phaser.Physics.ARCADE);
    var backGr = game.add.tileSprite(0, 0, 10000, 700, 'backGround');
    game.world.setBounds(0, 0, 10000, 700);
    backGr.width = 1000; backGr.height = 700;
    
    
    //GENERATE PLATFORMS
    platforms = game.add.group();
    platforms.enableBody = true;
    for (var i = 0; i < 4; i++) {
        //  Create a star inside of the 'stars' group
        var ledge = platforms.create(i * 200 + Math.random() * 200, game.world.randomY, 'platform');
        ledge.body.immovable = true;
    }
    ledge = platforms.create(30, game.world.height - 50, 'platform');
    ledge.body.immovable = true;
    
    
    //PLAYER SHIT...
    player = game.add.sprite(32, game.world.height - 150, 'dude');
    
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;
    
    player.animations.add('run', [1,2,3,4], 10, true);
    
    
    //ARROW-KEY SETUP
    cursors = game.input.keyboard.createCursorKeys();
    //SCORE TEXT SETUP
    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#0ff00f' });
    
    game.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER);
};



function update() {
    
    game.physics.arcade.collide(player, platforms);
    
    player.body.velocity.x = 0;
    
    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('run');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('run');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 5;
    }
    
    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -400;
    }
    
    if (!player.body.touching.down) {
        player.animations.stop();
        player.frame = 0;
    }
    
    scoreText.text = 'score: ' + player.x/10;
    
    
    
};








