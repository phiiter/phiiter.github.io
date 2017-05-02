var game = new Phaser.Game(1000, 700, Phaser.AUTO, '', { preload: preload, create: create, update: update });



function preload() {
    game.load.image('backGround', "back.jpg");
    game.load.image('platform', "plat.png");
    game.load.spritesheet('dude', "dude.png", 64, 64);
}

var platforms;

function create() {
        
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    var backGr = game.add.sprite(0, 0, 'backGround');
    backGr.width = 1000; backGr.height = 700;
    
    platforms = game.add.group();
    platforms.enableBody = true;
    var ledge = platforms.create(400, 400, 'platform');
    ledge.body.immovable = true;
    ledge = platforms.create(-150, 250, 'platform');
    ledge.body.immovable = true;
    
    player = game.add.sprite(32, game.world.height - 150, 'dude');
    player.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
    player.animations.play('walk');
    
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;
   /* player.animations.add('left', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
    player.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);    */
    
};

function update() {
    var hitPlatform = game.physics.arcade.collide(player, platforms);
};