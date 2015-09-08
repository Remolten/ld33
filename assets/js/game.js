var entities = [];
var cursors;

var Game = {
    preload: function() {
        game.stage.backgroundColor = 0x777777;
        game.time.advancedTiming = true;
        
        game.load.image('player', './assets/img/alienPink.png');
        //game.load.image('enemy', './assets/img/alienBlue.png');
    },

    create: function() {
        entitySystem = Object.create(EntitySystem.prototype);
        movementSystem = Object.create(MovementSystem.prototype);
        
        entitySystem.createPlayer(entitySystem.createEntity('player'));
        
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