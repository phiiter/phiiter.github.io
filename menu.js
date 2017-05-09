var menuState = {
    
    create: function() {
        
        game.add.sprite(0, 0, 'backGroundMenu');
        
        
        var header = game.add.text(245, 10, 'KIVIHIILISEIKKAILU', {font: '50px Lucida Console', fill: '#ffffff'})
        
        var description1 = game.add.text(30, 100, 'Hei! \nTervetuloa kivihiilen matkalle oppimaan lisää ainoasta \nenergianlähteestä, joka voi turvata energiansaantimme \nkriisitilanteissakin. Pelin edetessä pääset seuraamaan, \nmiten kivihiili muuntautuu energiaksi, joka \nlämmittää juuri sinun ja perheesi kotia.', {font: '18px Lucida Console', fill: '#ffffff', align: 'center'}); 
        var description2 = game.add.text(520, 130, 'Kivihiili alkoi muodostua kivihiilikaudella 350 miljoonaa vuotta sitten. \nTällöin maailma oli rehevän kasvillisuuden peitossa. Aikojen saatossa \nja maanpinnan poimuttuessa kasveja ja turvetta hautautui hapettomiin \noloihin hiekan, saven ja veden alle. Näissä olosuhteissa syntyi kivihiili, \njoka alun alkaen on siis kasveista ja \nturpeesta muodostunutta energiaa. ', {font: '16px Lucida Console', fill: '#ffffff', align: 'center'}); 
        
        var starText = game.add.text(5, 560, 'Paina välilyöntiä aloittaaksesi seikkailun ja kerää tähti päästäksesi seuraavalle tasolle!', {font: '26px Arial', fill: '#ffffff'});
        
        
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.addOnce(this.start, this);
        
    },
    
    start: function()  {
        
        game.state.start('play1');
        
    }
    
}