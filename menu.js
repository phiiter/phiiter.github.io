class menu extends Phaser.Scene {

    constructor() {
        super('menu');
    }

    init() {


    }


    create() {

        console.log(this.textures.list);

        let centerX = this.cameras.main.width / 2;
        let centerY = this.cameras.main.height / 2;

        this.add.image(centerX, centerY, 'backGroundMenu');

        const header = this.add.text(centerX, 130, 'THE JOURNEY OF COAL', { fontSize: 150, fontFamily: '"Micro 5"', fill: '#eee', align: 'center' }).setOrigin(0.5);

        //var header = game.add.texti;

        //var description1 = this.add.text(15, 80, 'Hei! \nTervetuloa kivihiilen matkalle \noppimaan lisää ainoasta energianlähteestä, \njoka voi turvata energiansaantimme \nkriisitilanteissakin. Pelin edetessä \npääset seuraamaan, miten \nkivihiili muuntautuu energiaksi, \njoka lämmittää juuri \nsinun ja perheesi kotia.', {font: '18px Lucida Console', fill: '#ffffff', align: 'center'}); 
        //var description2 = this.add.text(485, 105, 'Kivihiili alkoi muodostua kivihiilikaudella \n350 miljoonaa vuotta sitten. \nTällöin maailma oli rehevän kasvillisuuden peitossa. \nAikojen saatossa ja maanpinnan poimuttuessa \nkasveja ja turvetta hautautui hapettomiin \noloihin hiekan, saven ja veden alle. \nNäissä olosuhteissa syntyi kivihiili, \njoka alun alkaen on siis kasveista ja \nturpeesta muodostunutta energiaa. ', {font: '16px Lucida Console', fill: '#ffffff', align: 'center'}); 

        var container = this.add.rectangle(centerX, 575, 400, 50, 0xffffff, .5).setOrigin(0.5);
        var textConfig = { font: '46px "Micro 5"', fill: '#000', align: 'center' };

        var starText = this.add.text(centerX, 570, "Press 'space bar' to start", textConfig).setOrigin(0.5);



        this.input.keyboard.on('keydown', function (event) {
            this.scene.start('play1');
            console.log('painettu');
        }, this);

    }


}