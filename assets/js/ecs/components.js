var components = {};

var Component = {};
Component.prototype = {};

var Sprite = {};
Sprite.prototype = Object.create(Component.prototype);
Sprite.prototype.id = 'sprite';
Sprite.prototype.init = function(x, y, img, frm) {
    this.sprite = game.add.sprite(x, y, img, frm || 0);
};
components[Sprite.id] = Sprite.prototype;

var Controllable = {};
Controllable.prototype = Object.create(Component.prototype);
Controllable.prototype.id = 'controllable';
Controllable.prototype.init = function(cntrl) {
    this.controllable = cntrl;
};
components[Controllable.id] = Controllable.prototype;

var Speed = {};
Speed.prototype = Object.create(Component.prototype);
Speed.prototype.id = 'speed';
Speed.prototype.init = function(spd) {
    this.speed = spd;
};
components[Speed.id] = Speed.prototype;
