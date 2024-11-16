// set the view height and width
let vw = Math.min(document.documentElement.clientWidth || 0, window.innerWidth || 1356);
let vh = Math.min(document.documentElement.clientHeight || 0, window.innerHeight || 635);

// configure the game scenes
const gravities = [1500, 2500, 14, 1500];
const jumpForces = [-1200, -1600, -500, -1200];
const backgrounds = ['backGround1', 'backGround1', 'backGround1', 'backGround1'];

// configure the menu scenes
const menuTitles = [
    'THE JOURNEY OF COAL', 
    'YOU GOT YOUR FIRST COAL', 
    'YOU GOT YOUR SECOND COAL', 
    'YOU GOT YOUR THIRD COAL', 
    'YOU WON!',
    'GAME OVER'
];
const menuTexts = [
    'Go gather coal! See if you can catch all 4 pieces of coal and win the game.', 
    'Coal is the first fossil fuel utilized by humans.\nWithout coal, our industry would certainly not be where it is today, as coal is an\nenergy source that enabled the Industrial Revolution in England in the 18th century and gave\nrise to the industrial culture through which our world has developed into its current form.',
    "The environmental impacts of coal should not be underestimated, but\nthey are often unnecessarily feared. Thanks to modern technology, coal has been\ndeveloped into a significantly cleaner energy production method than before. Effective purification\ntechniques have been developed for flue gas emissions, bringing coal's emission\nlimits in line with those of other fuels.", 
    "Banning coal outright is an unreasonable solution, as no other energy source is as reliable,\naffordable, sufficient, and safe as coal. Coal is an economical way to produce electricity\nand heat, and unlikeoil and natural gas reserves, coal is not located in politically or economically\nunstable regions, making it a less crisis-prone energy source. The coal market remains stable\nbecause there are multiple producers and coal is evenly distributed across the globe.", 
    'You gathered all four pieces of coal.\nWe hope you have learned a lot about coal.',
    'Unfortunately, you fell off the coal journey.\nTo learn more, restart the game or visit www.hiilitieto.fi.'
];
const menuPrompts = [
    'Press "SPACE BAR" to start.', 
    'Press "SPACE BAR" to continue.', 
    'Press "SPACE BAR" to continue.', 
    'Press "SPACE BAR" to continue.', 
    'Press "SPACE BAR" to start again.',
    'Press "SPACE BAR" to start over.'
]
var config = {
    type: Phaser.AUTO,
    width: vw - 16,
    height: vh - 16,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [
        Load, 
        new Menu('menu', menuTitles[0], menuTexts[0], menuPrompts[0], 'play1'), 
        new Play(
            'play1',
            gravities[0], 
            jumpForces[0], 
            backgrounds[0],
        ), 
        new Menu('menu2', menuTitles[1], menuTexts[1], menuPrompts[1], 'play2'),
        new Play(
            'play2',
            gravities[1], 
            jumpForces[1], 
            backgrounds[1],
        ),
        new Menu('menu3', menuTitles[2], menuTexts[2], menuPrompts[2], 'play3'),
        new Play(
            'play3',
            gravities[2], 
            jumpForces[2], 
            backgrounds[2],
        ),
        new Menu('menu4', menuTitles[3], menuTexts[3], menuPrompts[3], 'play4'),
        new Play(
            'play4',
            gravities[3], 
            jumpForces[3], 
            backgrounds[3],
        ),
        new Menu('menu5', menuTitles[4], menuTexts[4], menuPrompts[4], 'play1'),
        new Menu('gameOver', menuTitles[5], menuTexts[5], menuPrompts[5], 'menu')
    ]
};

// create the game
var game = new Phaser.Game(config);    
var music;

// add the scenes
// game.scene.add('menu', menuState);
// game.scene.add('play1', play1State);
// game.scene.add('middle1', middle1State);
// game.scene.add('play2', play2State);
// game.scene.add('middle2', middle2State);
// game.scene.add('play3', play3State);
// game.scene.add('middle3', middle3State);
// game.scene.add('play4', play4State);
// game.scene.add('gameOver', gameOverState);


function create() {
    
    this.scene.start('load');
}



var lastY;
//FOR PLATFORM CREATING
function platformY() {
    var randY = Math.random() * 500 + 100;
    if (lastY > 400 && randY < 210) {
        return randY + 400;
    } else {
        return randY;
    }
}

//TO CHECK IF GAME ENDED IN FALL OR SUCCES
var dudeFell = false;

function update() {}