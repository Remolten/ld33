class Component {
    constructor() {
        this.id = 'component';
    }
    
    get id() {
        return this.cid;
    }
}

// Setters need to be done differently????
class Sprite extends Component {
    constructor(x, y, img, frm) {
        this.id = 'sprite';
        this._sprite = game.add.sprite(x, y, img, frm || 0);
    }
    
    get sprite() {
        return this._sprite;
    }
    
    get x() {
        return this._sprite.x;
    }
    
    set x(x) {
        this.sprite.x += x;
    }
    
    get x() {
        return this._sprite.y;
    }
    
    set y(y) {
        this.sprite.y += y;
    }
}
    