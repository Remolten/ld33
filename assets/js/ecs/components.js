var Component = {};
Component.prototype = {
    _id: 'component'
};
Object.defineProperty(Component.prototype, 'id', {
    get: function() {
        return this._id;
    }
});

var Sprite = {};
Sprite.prototype = Object.create(Component.prototype);
Sprite.prototype._id = 'sprite';
Sprite.prototype.init = function(x, y, img, frm) {
    this._sprite = game.add.sprite(x, y, img, frm || 0);
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
        set: function(y) {
            this._sprite.y += y;
        }
    },
    width: {
        get: function() {
            return this._sprite.width;
        },
        set: function(wdth) {
            this._sprite.width += wdth;
        }
    },
    height: {
        get: function() {
            return this._sprite.height;
        },
        set: function(hght) {
            this._sprite.height += hght;
        }
    }
});