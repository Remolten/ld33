var Entity = {};
Entity.prototype = {
    init: function(id) {
        this.id = id;
        this.components = {};
    },
    getComponent: function(id) {
        return this.components[id];
    },
    add: function() {
        for (var i = 0; i < arguments.length; i++) {
            this.components[arguments[i].id] = arguments[i];
        }
    },
    remove: function(id) {
        delete this.components[id];
    }
};