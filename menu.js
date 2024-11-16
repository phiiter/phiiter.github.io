class Menu extends Phaser.Scene {

    constructor(name, title, texti, prompt, nextScene) {
        super(name);
        this.name = name;
        this.title = title,
        this.texti = texti,
        this.prompt = prompt,
        this.nextScene = nextScene
    }

    init() {


    }


    create() {

        console.log(this.textures.list);

        let centerX = this.cameras.main.width / 2;
        let centerY = this.cameras.main.height / 2;

        this.add.image(centerX, centerY, 'backGroundMenu');

        const header = this.add.text(centerX, this.name === 'menu' || this.name === 'menu5' ? 130 : 80, this.title, { fontSize: this.name === 'menu' || this.name === 'menu5' ? 150 : 70, fontFamily: '"Micro 5"', fill: '#eee', align: 'center' }).setOrigin(0.5);

        const textii = this.add.text(centerX, this.name === 'menu' || this.name === 'menu5' ? 210 : 180, this.texti, { font: '36px "Micro 5"', fill: '#fff', align: 'center' }).setOrigin(0.5);

        //var description1 = this.add.text(15, 80, 'Hei! \nTervetuloa kivihiilen matkalle \noppimaan lisää ainoasta energianlähteestä, \njoka voi turvata energiansaantimme \nkriisitilanteissakin. Pelin edetessä \npääset seuraamaan, miten \nkivihiili muuntautuu energiaksi, \njoka lämmittää juuri \nsinun ja perheesi kotia.', {font: '18px Lucida Console', fill: '#ffffff', align: 'center'}); 
        //var description2 = this.add.text(485, 105, 'Kivihiili alkoi muodostua kivihiilikaudella \n350 miljoonaa vuotta sitten. \nTällöin maailma oli rehevän kasvillisuuden peitossa. \nAikojen saatossa ja maanpinnan poimuttuessa \nkasveja ja turvetta hautautui hapettomiin \noloihin hiekan, saven ja veden alle. \nNäissä olosuhteissa syntyi kivihiili, \njoka alun alkaen on siis kasveista ja \nturpeesta muodostunutta energiaa. ', {font: '16px Lucida Console', fill: '#ffffff', align: 'center'}); 

        var container = this.add.rectangle(centerX, 575, this.name === 'menu' ? 430 : 520, 50, 0xffffff, .5).setOrigin(0.5);
        var textConfig = { font: '46px "Micro 5"', fill: '#000', align: 'center' };

        var starText = this.add.text(centerX, 570, this.prompt, textConfig).setOrigin(0.5);

        
        
        // var spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // spaceBar.on('down', listener)


        this.input.keyboard.on('keydown-SPACE', function (event) {
            this.scene.start(this.nextScene);
            console.log('painettu');
        }, this);

    }


}