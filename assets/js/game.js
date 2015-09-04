var player, cursorPos;
var entities = [];

var Game = {
    preload: function() {
        game.stage.backgroundColor = 0x777777;
        game.time.advancedTiming = true;
        
        game.load.image('tile', './assets/img/tileBorder.png');
        game.load.image('player', './assets/img/alienPink.png');
        game.load.image('enemy', './assets/img/alienBlue.png');
    },

    create: function() {
        playerGroup = game.add.group();
        enemyGroup = game.add.group();

        player = new Entity('player');
        player.add(new Sprite(game.width / 2, game.height / 2, 'player'));
        entities.add(player);
        
        cursorPos = new Phaser.Plugin.Isometric.Point3();
        
        this.cursors = game.input.keyboard.createCursorKeys();

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
        
        console.log(this);
    },
    
    update: function() {
        /*if (turnState) {
            if ((this.cursors.up.isDown || game.input.keyboard.isDown(Phaser.Keyboard.W)) && player.isoY > 0 && !move) {
                player.movement.moveUp();
                move = true;
            }
            else if ((this.cursors.down.isDown || game.input.keyboard.isDown(Phaser.Keyboard.S)) && player.isoY < 256 - 64 && !move) {
                player.movement.moveDown();
                move = true;
            }

            if ((this.cursors.left.isDown || game.input.keyboard.isDown(Phaser.Keyboard.A)) && player.isoX > 0 && !move) {
                player.movement.moveLeft();
                move = true;
            }
            else if ((this.cursors.right.isDown || game.input.keyboard.isDown(Phaser.Keyboard.D)) && player.isoX < 256 - 64 && !move) {
                player.movement.moveRight();
                move = true;
            }*/
    }
};