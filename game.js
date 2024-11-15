let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 1356);
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 635);

// configure the game
const gravities = [1500, 2500, 500, 1500];
const jumpForces = [-1200, -1800, -300, -1200];
const backgrounds = ['backGround1', 'backGround2', 'backGround3', 'backGround4'];
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
        menu, 
        new play1(
            'play1',
            gravities[0], 
            jumpForces[0], 
            backgrounds[0]
        ), 
        middle1,
        new play1(
            'play2',
            gravities[1], 
            jumpForces[1], 
            backgrounds[1]
        ),
        new play1(
            'play3',
            gravities[2], 
            jumpForces[2], 
            backgrounds[2]
        ),
        new play1(
            'play1',
            gravities[3], 
            jumpForces[3], 
            backgrounds[3]
        )

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




//FOR PLATFORM CREATING
function platformY() {
    var randY = Math.random() * 500 + 100;
    if (lastY > 400 && randY < 200) {
        return randY + 400;
    } else {
        return randY;
    }
}

//TO CHECK IF GAME ENDED IN FALL OR SUCCES
var dudeFell = false;

function update() {}