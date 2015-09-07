var entities = [];
var cursors;

//Temp
var player;

var Game = {
    preload: function() {
        game.stage.backgroundColor = 0x777777;
        game.time.advancedTiming = true;
        
        //game.load.image('tile', './assets/img/tileBorder.png');
        game.load.image('player', './assets/img/alienPink.png');
        //game.load.image('enemy', './assets/img/alienBlue.png');
    },

    create: function() {
        movementSystem = Object.create(MovementSystem.prototype);

        player = Object.create(Entity.prototype);
        player.init('player');
        player.add(Object.create(Sprite.prototype));
        player.add(Object.create(Controllable.prototype));
        player.getComponent('sprite').init(0, 0, 'player');
        entities.push(player);
        
        cursors = game.input.keyboard.createCursorKeys();

        game.input.keyboard.addKeyCapture([
            Phaser.Keyboard.LEFT,
            Phaser.Keyboard.RIGHT,
            Phaser.Keyboard.UP,
            Phaser.Keyboard.DOWN,
            Phaser.Keyboard.W,
            Phaser.Keyboard.A,
            Phaser.Keyboard.S,
            Phaser.Keyboard.D,
        ]);
    },
    
    update: function() {
        movementSystem.update();
    }
};