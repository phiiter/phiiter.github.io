var middle2State = {
    
    create: function() {
        
        var infoText = game.add.text(400, 400, 'Katri, tähän se teksti...', {font: '25px Arial', fill: '#ff0000'});
   
        var resumeText = game.add.text(600, 400, 'press SPACE to continue', {font: '25px Arial', fill: '#ff0000'});
         
         
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.addOnce(this.start, this);
        
    },
    
    start: function()  {
        
        game.state.start('play3');
        
    }
    
}