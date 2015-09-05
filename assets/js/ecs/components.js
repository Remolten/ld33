var Component = function() {};
Component.prototype.id = 'component';
Object.defineProperty(Component.prototype, 'id', {
    get: function() {
        return this.id;
    }
});

// Setters need to be changed still
var Sprite = Object.create(Component);
Sprite.prototype.init = function(x, y, img, frm) {
    this.id = 'sprite';
    this._sprite = game.add.sprite(x, y, img, frm);
};
Object.defineProperties(Sprite.prototype, {
    sprite: {
        get: function() {
            return this._sprite;
        }
    },
    x: {
        get: function() {
            return this._sprite.x;
        },
        set: function(x) {
            this._sprite.x += x;
        }
    },
    y: {
        get: function() {
            return this._sprite.y;
        },
        set: function() {
            this._sprite.y += y;
        }
    }
});
    