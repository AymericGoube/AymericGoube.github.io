var game = new Phaser.Game(1200, 650, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
  game.load.spritesheet('mario', 'image/dude.png', 32, 48);
  game.load.image('sky','image/backgrd4.png');
  game.load.image('pipe','image/tube2.png');
  game.load.spritesheet('coin', 'image/coin2.png', 32, 32);
}

var player;
var platforms;
var coin;
var coins;
var score = 0;
var scoreText;
function create() {

  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.add.tileSprite(0, 0, 9000, 950, 'sky');

  platforms = game.add.group();
  platforms.enableBody = true;
  var tuyau = platforms.create(400, 350,'pipe');
  tuyau.body.immovable = true;
  tuyau = platforms.create(600, 500, 'pipe');
  tuyau.body.immovable = true;

  game.world.setBounds(0, 0, 9000, 650);
  player = game.add.sprite(32, game.world.height - 400, 'mario');

  game.physics.arcade.enable(player);
  player.body.gravity.y = 1200;
  player.body.collideWorldBounds = true;
  cursors = game.input.keyboard.createCursorKeys();
  game.camera.follow(player);



  // var coin = game.add.sprite(400,200, 'coin');
  // var tourne = coin.animations.add('tourne');
  // coin.animations.play('tourne',30,true);

  coins = game.add.group();
  coins.enableBody = true;
  for (var i = 1; i < 25; i++)
  {
    let hauteur = Math.random()*550;
    var coin = coins.game.add.sprite(i * 300, hauteur, 'coin');
    var tourne = coin.animations.add('tourne');
    coin.animations.play('tourne',30,true);
  }
}

function update() {

    player.body.velocity.x = 150;
  game.physics.arcade.collide(player, platforms);
  game.physics.arcade.overlap(player, coins, collectCoin, null, this);
  scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000'});
  scoreText.fixedToCamera = true;

  if (cursors.up.isDown)
  {
    player.body.velocity.y = -300;
  }

}

function collectCoin (player, coins) {
console.log("salut");
  // Kill la pièce
  coin.kill();

  //  Update le score
  score += 10;
  scoreText.text = 'Score: ' + score;

}
