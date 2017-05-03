

function create() {
        
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    var backGr = game.add.sprite(0, 0, 'backGround');
    backGr.width = 1000; backGr.height = 700;
    
    
    platforms = game.add.group();
    platforms.enableBody = true;
    for (var i = 0; i < 4; i++) {
        //  Create a star inside of the 'stars' group
        var ledge = platforms.create(i * 200, 400, 'platform');
        
        ledge.body.immovable = true;
    }
    ledge = platforms.create(30, game.world.height - 50, 'platform');
    ledge.body.immovable = true;
    
    
    player = game.add.sprite(32, game.world.height - 150, 'dude');
    
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;
    
    player.animations.add('run', [1,2,3,4], 10, true);
   /* player.animations.add('left', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
    player.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);    */
    
    cursors = game.input.keyboard.createCursorKeys();
    
    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#0ff00f' });
    
};