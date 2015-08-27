class Entity {
    constructor(id) {
        this.id = id;
        this.components = {};
    }
    
    get id() {
        return this.id;
    }
    
    get component("cid") {
        return this.components["cid"];
    }
    
    set component("cid", component) {
        this.add("cid", component);
    }
    
    add("cid", component) {
        this.components["cid"] = component;
    }
    
    remove("cid") {
        delete this.components["cid"];
    }
}