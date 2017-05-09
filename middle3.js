var middle3State = {
    
    create: function() {
        
        game.add.sprite(0, 0, 'backGroundMenu');
        
        
        var infoText = game.add.text(120, 150, 'On fakta, että hiili ei ole ympäristöystävällisin \nenergiantuotantovaihtoehto, ja tämän vuoksi hallitus \nyhdessä muiden tahojen kanssa puuhaa kivihiilen kieltolakia. \nTämä on kuitenkin järjetön ratkaisu, \nsillä mikään toinen energianlähde ei ole yhtä varma, edullinen, \nriittävä ja turvallinen kuin kivihiili. \nKivihiili on taloudellinen tapa tuottaa sähköä ja lämpöä, \nja toisin kuin öljy- ja maakaasuvarat, \nhiili ei sijaitse poliittisesti tai taloudellisesti \nepävakailla alueilla eikä näin \nollen ole kriisiherkkä energianlähde. \nHiilimarkkinat pysyvät järkevinä, koska hiilen tuottajia on useita \nja sitä löytyy tasaisesti ympäri maapalloa. ', {font: '22px Lucida Console', fill: '#ffffff'});
   
        var resumeText = game.add.text(120, 600, 'Paina välilyöntiä jatkaaksesi!', {font: '25px Lucida Console', fill: '#ffffff'});
         
        game.stage.backgroundColor = "#408000";
         
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.addOnce(this.start, this);
        
    },
    
    start: function()  {
        
        game.state.start('play4');
        
    }
}