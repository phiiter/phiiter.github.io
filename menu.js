var menuState = {
    
    create: function() {
        
        var header = game.add.text(275, 50, 'KIVIHIILISEIKKAILU', {font: '38px Lucida Console', fill: '#ffffff'})
        var description = game.add.text(80, 150, 'Hei! \nTervetuloa kivihiilen matkalle oppimaan lisää ainoasta \nenergianlähteestä, joka voi turvata energiansaantimme \nkriisitilanteissakin. \nPelin edetessä pääset seuraamaan, miten kivihiili muuntautuu \nenergiaksi, joka lämmittää juuri sinun ja perheesi kotia. \n\nKivihiili alkoi muodostua kivihiilikaudella \n350 miljoonaa vuotta sitten. \nTällöin maailma oli rehevän kasvillisuuden peitossa. \nAikojen saatossa ja maanpinnan poimuttuessa kasveja ja turvetta \nhautautui hapettomiin oloihin hiekan, saven ja veden alle. \nNäissä olosuhteissa syntyi kivihiili, joka alun alkaen \non siis kasveista ja turpeesta muodostunutta energiaa. ', {font: '22px Lucida Console', fill: '#ffffff'}); 
        var starText = game.add.text(200, 600, 'Paina välilyöntiä aloittaaksesi seikkailun \nja kerää tähti päästäksesi seuraavalle tasolle!', {font: '25px Lucida Console', fill: '#ffffff'});
        var music = game.add.audio('backGroundMusic')
        music.loop = true;
        music.play();
        game.stage.backgroundColor = "009900";
        
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.addOnce(this.start, this);
        
    },
    
    start: function()  {
        
        game.state.start('play1');
        
    }
    
}