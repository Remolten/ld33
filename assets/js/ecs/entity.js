var 

class Entity {
    constructor(id) {
        this.id = id;
        this._components = {};
    }
    
    get id() {
        return this.id;
    }
    
    get components() {
        return this._components;
    }
    
    getComponent(id) {
        return this._components[id];
    }
    
    add() {
        for (var i = 0; i < arguments.length; i++) {
            this._components[arguments[i].id] = arguments[i];
        }
    }
    
    remove(id) {
        delete this._components[id];
    }
}