var loadState = {
    
    preload: function() {
        
        var loading = game.add.text(400, 300, 'loading', {font: '45px coursive', fill: '#ff0000'});
        
        game.load.image('backGround1', "lvl1_tausta.jpg");
        game.load.image('backGround2', "lvl2_tausta.jpg");
        game.load.image('backGround3', "lvl3_tausta.jpg");
        game.load.image('backGround4', "lvl4_tausta.jpg");
        game.load.image('platform', "plat.png");
        game.load.spritesheet('dude', "dude.png", 64, 64);
        game.load.image('star', "star.png");
        game.load.audio('backGroundMusic', ["Star Commander1.mp3", "Star_Commander1.ogg"]);
        

    },
    
    create: function() {
        game.state.start('menu');
    }
    
    
}

