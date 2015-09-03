class Entity {
    constructor(id) {
        this.id = id;
        this.components = {};
    }
    
    get id() {
        return this.id;
    }
    
    component(cid) {
        return this.components[cid];
    }
    
    add() {
        for (var i = 0; i < arguments.length; i++) {
            this.components[arguments[i].cid] = arguments[i];
        }
    }
    
    remove(cid) {
        delete this.components[cid];
    }
    
    has(cid) {
        return this.components ? hasOwnProperty.call(this.components, key):false;
    }
}