// Just in case all of the systems need shared attributes
var System = {};
System.prototype = {};

var EntitySystem = {};
EntitySystem.prototype = Object.create(System.prototype);
EntitySystem.prototype.createEntity = function(id) {
    var entity = Object.create(Entity.prototype);
    entity.init(id);
    entities.push(entity);
    return entity;
};
EntitySystem.prototype.createPlayer = function(player) {
    player.add(Object.create(Sprite.prototype), Object.create(Controllable.prototype), Object.create(Speed.prototype));
    player.getComponent('sprite').init(0, 0, 'player');
    player.sprite = player.getComponent('sprite').sprite;
    player.sprite.x = game.width / 2 - player.sprite.width;
    player.sprite.y = game.height - player.sprite.height;
    player.getComponent('controllable').init(true);
    player.controllable = player.getComponent('controllable');
    player.getComponent('speed').init(5);
    player.speed = player.getComponent('speed').speed;
    entities.push(player);
};

var MovementSystem = {};
MovementSystem.prototype = Object.create(System.prototype);
MovementSystem.prototype.update = function() {
    entities.forEach(function(entity) {
        if (entity.controllable) {
            if ((cursors.up.isDown || game.input.keyboard.isDown(Phaser.Keyboard.W)) && entity.sprite.y > 0) {
                entity.sprite.y -= entity.speed;
            }
            else if ((cursors.down.isDown || game.input.keyboard.isDown(Phaser.Keyboard.S)) && entity.sprite.y < game.height - entity.sprite.height) {
                entity.sprite.y += entity.speed;
            }
            if ((cursors.left.isDown || game.input.keyboard.isDown(Phaser.Keyboard.A)) && entity.sprite.x > 0) {
                entity.sprite.x -= entity.speed;
            }
            else if ((cursors.right.isDown || game.input.keyboard.isDown(Phaser.Keyboard.D)) && entity.sprite.x < game.width - entity.sprite.width) {
                entity.sprite.x += entity.speed;
            }
        }
    });
};