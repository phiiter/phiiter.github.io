var middle2State = {
    
    create: function() {
        
                var infoText = game.add.text(120, 150, 'Kivihiilen ympäristövaikutuksia ei pidä vähätellä, \nmutta usein niitä kavahdetaan turhaan: \nnykyteknologian avulla hiilestä on onnistuttu kehittämään \nhuomattavasti entistä puhtaampi energiantuottotapa. \nSavukaasupäästöihin on kehitetty tehokasta \npuhdistustekniikkaa, jonka ansiosta kivihiilen \npäästöraja-arvot ovat asettuneet samalle tasolle \nkuin muidenkin polttoaineiden. \nMyös hiilidioksidihaittojen vähentämiseksi on käynnissä \nerittäin suuria kehityshankkeita eri puolilla maailmaa. ', {font: '25px Lucida Console', fill: '#ffffff'});
   
        var resumeText = game.add.text(120, 500, 'Paina välilyöntiä jatkaaksesi!', {font: '25px Lucida Console', fill: '#ffffff'});
         
        game.stage.backgroundColor = "#408000";
         
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.addOnce(this.start, this);
        
    },
    
    start: function()  {
        
        game.state.start('play3');
        
    }
    
}