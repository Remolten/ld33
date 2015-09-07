var entities;

var Game = {
    preload: function() {
        game.stage.backgroundColor = 0x777777;
        game.time.advancedTiming = true;
        
        //game.load.image('tile', './assets/img/tileBorder.png');
        game.load.image('player', './assets/img/alienPink.png');
        //game.load.image('enemy', './assets/img/alienBlue.png');
    },

    create: function() {
        entities = game.add.group();
        //var spriteGroup = game.add.group();

        // We need to init before adding
        var player = Object.create(Entity.prototype);
        player.init('player');
        player.add(Object.create(Sprite.prototype));
        player.sprite = player.getComponent('sprite');
        player.sprite.init(0, 0, 'player');
        player.sprite.x += 100;
        // Groups are bugged???
        //entities.add(player);
        
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
    },
    
    update: function() {
        //This would be a system
        if ((this.cursors.up.isDown || game.input.keyboard.isDown(Phaser.Keyboard.W)) && player.sprite.y > 0) {
            player.movement.moveUp();
            move = true;
        }
        else if ((this.cursors.down.isDown || game.input.keyboard.isDown(Phaser.Keyboard.S)) && player.sprite.y < 256 - 64) {
            player.movement.moveDown();
            move = true;
        }

        if ((this.cursors.left.isDown || game.input.keyboard.isDown(Phaser.Keyboard.A)) && player.sprite.x > 0) {
            player.movement.moveLeft();
            move = true;
        }
        else if ((this.cursors.right.isDown || game.input.keyboard.isDown(Phaser.Keyboard.D)) && player.sprite.x < 256 - 64) {
            player.movement.moveRight();
            move = true;
        }*/
    }
};