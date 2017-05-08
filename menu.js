var menuState = {
    
    create: function() {
        
        var gameName = game.add.text(400, 300, 'kivihiili QUEST', {font: '45px Arial', fill: '#ff0000'});
        var starText = game.add.text(400, 400, 'press SPACE to start', {font: '25px Arial', fill: '#ff0000'});
        
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.addOnce(this.start, this);
        
    },
    
    start: function()  {
        
        game.state.start('play1');
        
    }
    
}