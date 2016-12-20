// Game content
var length = 400;
var height = 711;
// var scorespeed = this.score + 10
var lvlspeed = 250 //* scorespeed



// Create the main state - contains the Game
var mainState = {
  // Preloader
  preload: function() {
    // All that needs to be preloaded
    game.load.image('monkey', '../img/flappy.png');
    game.load.image('pipe', '../img/pipe.png');
  },

  // Called after preloading
  create: function() {
    // Change the background colour
    game.stage.backgroundColor = '#71c5cf';

    // We are going to use a lot of spikes, lets create a group
    this.pipes = game.add.group();

    // Set the physics system (a phaser function - yo!)
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Display the bird at the given x,y position
    this.monkey = game.add.sprite(50, 245, 'monkey');

    // Lets add some physics
    // Physics yo, it is needed for movement, gravity and so on
    game.physics.arcade.enable(this.monkey);

    // This is flappy monkey (patent pending), lets add gravity
    this.monkey.body.gravity.y = 1000; // Remember - Gravity moves on the Y axis

    // To save it from falling out of the screen
    // Add spacebar to create the so called jump function
    var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.jump, this);

    this.timer = game.time.events.loop(1200, this.addRowOfPipes, this);

    this.score = 0;
    this.labelScore = game.add.text(20, 20, "0",
      { font: "30px Arial", fill: "#ffffff" });
  },

  // Called lastly, but 60 times a second
  update: function() {
    // If that monkey moves out of the screen (up or down)
    // Then lets call the restartGame function
    if (this.monkey.y < 0 || this.monkey.y > height) {
      this.restartGame();
    };
    game.physics.arcade.overlap(
    this.monkey, this.pipes, this.restartGame, null, this);

    if (this.monkey.angle < 20)
      this.monkey.angle += 1;
  },

  // Make sure monkey can jumpie jumpie
  jump: function() {
    // Add a vertical velocity to the monkey
    this.monkey.body.velocity.y = -450;

    //Lets add some animation
    var animation = game.add.tween(this.monkey);

    // Change the angle of the monkey
    animation.to({angle: -20}, 100);

    animation.start();
  },

  // Create the restartGame function
  restartGame: function() {
    // Start the 'main' state, which restarts the game
    game.state.start('main');
  },

  // To add another spike
  addOnePipe: function(x, y) {
    // Create a pipe at the position x and y
    var pipe = game.add.sprite(x, y, 'pipe');

    // Add the pipe to our previously created group
    this.pipes.add(pipe);

    // Enable physics on the pipe
    game.physics.arcade.enable(pipe);

    // Add velocity to the pipe to make it move left
    pipe.body.velocity.x = -lvlspeed;

    // Automatically kill the pipe when it's no longer visible
    pipe.checkWorldBounds = true;
    pipe.outOfBoundsKill = true;
  },

  addRowOfPipes: function() {
    // Randomly pick a number between 1 and 5
    // This will be the hole position
    var hole = Math.floor(Math.random() * 5 + 1);

    // Add the 6 pipes
    // With one big hole at position 'hole' and 'hole + 1'
    for (var i = 0; i < 10; i++)
      if (i != hole && i != hole + 1 && i != hole + 2 && i != hole + 3)
        this.addOnePipe(length, i * 71.1 + 10);

    this.score += 1;
    this.labelScore.text = this.score;
  },
};

// Initialize phaser - Lets get started
var game = new Phaser.Game(length, height, Phaser.AUTO, "canvas");

// Add the var 'mainState' to our game as a state - call it main
game.state.add('main', mainState);

// Start the state to actually start the game - we are good to go
game.state.start('main');
