

function update() {
    
    game.physics.arcade.collide(player, platforms);
    
    player.body.velocity.x = 0;
    
    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('run');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('run');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 5;
    }
    
    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -400;
    }
    
    if (!player.body.touching.down) {
        player.animations.stop();
        player.frame = 0;
    }
    
    
    
};