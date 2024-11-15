class middle1 extends Phaser.Scene {
    constructor() {
        super('middle1');
    }
}


var middle1State = {
    
     create: function() {
        
         
        game.add.sprite(0, 0, 'backGroundM1');
         
        var infoText = game.add.text(180, 450, 'Kivihiili on ensimmäinen fossiilinen polttoaine, \njota ihminen hyödynsi. \nIlman hiiltä teollisuutemme ei varmasti olisi tällä tolalla, \nsillä hiili on energianlähde, \njoka mahdollisti teollisen vallankumouksen Englannissa \n1700-luvulla ja synnytti teollisen kulttuurin, \njonka mukana maailmamme on kehittynyt nykyisekseen. \nHiili on ollut merkittävä energianlähde myös \nliikennepolttoaineissa ja vauhdittanut matkaan \nmiljoonia höyrylaivoja ja -vetureita. ', {font: '19px Lucida Console', fill: '#000000', align: 'center'});
   
        var resumeText = game.add.text(300, 40, 'Paina välilyöntiä jatkaaksesi!', {font: '25px Lucida Console', fill: '#000000'});
         
        game.stage.backgroundColor = "#008040";
         
         
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.addOnce(this.start, this);
        
    },
    
    start: function()  {
        
        game.state.start('play2');
        
    }
    
    
}