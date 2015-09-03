class Component {
    constructor() {
        this.cid = 'component';
    }
    
    get cid() {
        return this.cid;
    }
}

class Sprite extends Component {
    constructor(x, y, z, img, layer, group, ax, ay) {
        this.cid = 'sprite';
        this.sprite = game.add.isoSprite(x, y, z, img, layer, group);
        this.sprite.anchor.set(ax, ay);
    }
    
    get sprite() {
        return this.sprite;
    }
    
    set isoX(x) {
        this.sprite.isoX += x;
    }
    
    set isoY(y) {
        this.sprite.isoY += y;
    }
    
    set scaleX(x) {
        this.sprite.scale.x = x;
    }
}

class Movement extends Sprite {
    constructor(ts, ms) {
        this.cid = 'movement';
        this.ts = ts;
        this.ms = ms;
    }
    moveUp() {
        this.isoY = -(ts * ms);
        this.scaleX = 1;
    }
    moveDown() {
        this.isoY = ts * ms;
        this.scaleX = -1;
    }
    moveLeft() {
        this.isoX = -(ts * ms);
        this.scaleX = -1;
    }
    moveRight() {
        this.isoX = ts * ms;
        this.scaleX = 1;
    }
}

class Health extends Component {
    constructor(health) {
        this.cid = 'health'
        this.health = health;
    }
    
    get health() {
        return this.health;
    }
    
    damage(amt) {
        this.health -= amt;
    }
    
    heal(amt) {
        this.health += amt;
    }
}
    