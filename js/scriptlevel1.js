var mainState = {
    preload: function() {
        game.load.spritesheet('mario', 'image/dude.png', 32, 48);
        game.load.image('pipe','image/tube2.png');
        game.load.image('coin', 'image/diamond.png');
    },
    create: function() {
        game.stage.backgroundColor = '#71c5cf';
        game.physics.startSystem(Phaser.Physics.ARCADE);
        player = game.add.sprite(300, game.world.height - 400, 'mario');

        game.physics.arcade.enable(player);
        player.body.gravity.y = 1200;
        cursors = game.input.keyboard.createCursorKeys();
        game.camera.follow(player);

        cursors = game.input.keyboard.createCursorKeys();
        cursors.up.onDown.add(this.jump, this);
        var timer = game.time.events.loop(1500, this.addCoin,this);
        coins = game.add.group();
        coins.enableBody = true;
        let hauteur = Math.random()*550;
        var coin = coins.create(800, hauteur, 'coin');
        game.physics.arcade.enable(coin);
        coin.body.velocity.x = -200;
        coin.checkWorldBounds = true;
        coin.onOutOfBoundskill = true;
        scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000'});
        highscoreText = game.add.text(200, 16, 'Highscore:'+ highscore, { fontSize: '32px', fill: '#000'});
        pause = game.add.text(800, 16, 'Pause', { fontSize: '32px', fill: '#000'});
         pause.inputEnabled = true;
         pause.events.onInputUp.add(function () {
        // When the paus button is pressed, we pause the game
        game.paused = true;
         unpause = game.add.text(500, 300, 'Reprendre', { font: '50px Arial', fill: '#000' });

    });

    game.input.onDown.add(unpause, self);
    function unpause(event){
        if (game.paused) {
            unpause.destroy();
            game.paused = false;
        }

    }
    },
    addCoin: function(){
        let hauteur = Math.random()*550;
        var coin = coins.create(800, hauteur, 'coin');
        game.physics.arcade.enable(coin);
        coin.body.velocity.x = -200;
        coin.checkWorldBounds = true;
        coin.onOutOfBoundskill = true;

    },


    update: function() {
        // This function is called 60 times per second
        // It contains the game's logic
        game.physics.arcade.overlap(player, coins, this.collectCoin, null,this);
        if (score > highscore) {
            sessionStorage.setItem("highscore",score);
        }
        if (player.body.y < 0 || player.body.y > 650)
        this.restartGame();
    },
    collectCoin: function (player, coin) {
        // Kill la pièce
        coin.kill();

        //  Update le score
        score += 10;
        scoreText.text = 'Score: ' + score;
    },
    jump: function() {
        player.body.velocity.y = -350;
    },
    restartGame: function() {
        // Start the 'main' state, which restarts the game
        game.state.start('main');
        score = 0;
    },
};

// Initialize Phaser, and create a 400px by 490px game
var game = new Phaser.Game(1200, 650);
var score = 0;
var scoreText;
var pause;
var highscore = sessionStorage.getItem("highscore");
// Add the 'mainState' and call it 'main'
game.state.add('main', mainState);

// Start the state to actually start the game
game.state.start('main');
