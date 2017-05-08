var loadState = {
    
    preload: function() {
        
        var loading = game.add.text(400, 300, 'loading', {font: '45px coursive', fill: '#ff0000'});
        
        game.load.image('backGround', "back.jpg");
        game.load.image('platform', "plat.png");
        game.load.spritesheet('dude', "dude.png", 64, 64);
        game.load.image('star', "star.png");

    },
    
    create: function() {
        game.state.start('menu');
    }
    
}

