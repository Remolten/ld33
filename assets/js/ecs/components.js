var Component = {};
Component.prototype = {
    _id: 'component'
};
Object.defineProperty(Component.prototype, 'id', {
    get: function() {
        return this._id;
    }
});

// Refactoring of this probably on the way
var Sprite = {};
Sprite.prototype = Object.create(Component.prototype);
Sprite.prototype._id = 'sprite';
Sprite.prototype.init = function(x, y, img, frm) {
    this.sprite = game.add.sprite(x, y, img, frm || 0);
};

var Controllable = {};
Controllable.prototype = Object.create(Component.prototype);
Controllable.prototype._id = 'controllable';
Controllable.prototype.controllable = true;

var Speed = {};
Speed.prototype = Object.create(Component.prototype);
Speed.prototype._id = 'speed';
Speed.prototype.init = function(spd) {
    this.speed = spd;
};
