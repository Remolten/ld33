var System = {};
System.prototype = {};

var MovementSystem = {};
MovementSystem.prototype = Object.create(System.prototype);
MovementSystem.prototype.update = function(entities) {
    entities.forEach(function(entity) {
        if (entity.getComponent('controllable').controllable) {
            if ((cursors.up.isDown || game.input.keyboard.isDown(Phaser.Keyboard.W)) && entity.getComponent('sprite').sprite.y > 0) {
                entity.getComponent('sprite').sprite.y -= 5;
            }
            else if ((cursors.down.isDown || game.input.keyboard.isDown(Phaser.Keyboard.S)) && entity.getComponent('sprite').sprite.y < game.height - entity.getComponent('sprite').sprite.height) {
                entity.getComponent('sprite').sprite.y += 5;
            }
            if ((cursors.left.isDown || game.input.keyboard.isDown(Phaser.Keyboard.A)) && entity.getComponent('sprite').sprite.x > 0) {
                entity.getComponent('sprite').sprite.x -= 5;
            }
            else if ((cursors.right.isDown || game.input.keyboard.isDown(Phaser.Keyboard.D)) && entity.getComponent('sprite').sprite.x < game.width - entity.getComponent('sprite').sprite.width) {
                entity.getComponent('sprite').sprite.x += 5;
            }
        }
    });
};