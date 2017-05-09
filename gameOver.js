var gameOverState = {
    
    
    create: function() {
        
        if(dudeFell) {
            var infoText = game.add.text(120, 150, 'Valitettavasti tipuit kivihiilen matkasta. \nSaadaksesi tietää lisää, aloita peli alusta tai \nsiirry sivustolle www.hiilitieto.fi. Kiitos mielenkiinnostasi, \nliity sinäkin mukaan vaikuttamaan kivihiilen \nenergiakäytön säilyttämisen puolesta!', {font: '22px Lucida Console', fill: '#ffffff'});
   
            var resumeText = game.add.text(120, 500, 'Paina välilyöntiä aloittaaksesi alusta!', {font: '25px Lucida Console', fill: '#ffffff'});
            
        } else {
            
            var infoText = game.add.text(120, 150, 'Onnea! Olet kulkenut kivihiilen mukana sen matkan aina \n350 miljoonan vuoden takaa tähän päivään asti. \nMatkan aikana sait arvokasta tietoa kivihiilestä, joka kannattaa pitää mielessä. \nLiity sinäkin mukaan vaikuttamaan \nkivihiilen energiakäytön säilyttämisen puolesta!', {font: '22px Lucida Console', fill: '#ffffff'});
            
            
        }
         
        game.stage.backgroundColor = "#008040";
         
         
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.addOnce(this.start, this);
        
    },
    
    
    start: function()  {
        
        game.state.start('play1');
        
    }
    
    
    
}
