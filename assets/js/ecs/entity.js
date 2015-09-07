var Entity = {};
Entity.prototype = {
    init: function(id) {
        this._id = id;
        this._components = {};
    },
    getComponent: function(id) {
        return this._components[id];
    },
    add: function() {
        for (var i = 0; i < arguments.length; i++) {
            this._components[arguments[i].id] = arguments[i];
        }
    },
    remove: function(id) {
        delete this._components[id];
    }
};
Object.defineProperties(Entity.prototype, {
    id: {
        get: function() {
            return this._id;
        }
    },
    components: {
        get: function() {
            return this._components;
        }
    }
});