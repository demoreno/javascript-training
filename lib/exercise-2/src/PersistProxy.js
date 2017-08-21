
function PersistProxy(adapter){

    this._adapter = adapter;
}

/**
 * @method save
 * @param key
 * @param value
 */
PersistProxy.prototype.save = function (key,value) {
    this._adapter.save(key,value);
};
/**
 * @method get
 * @param key
 */
PersistProxy.prototype.get = function(key){
    return this._adapter.get(key);
};
/**
 * @method delete
 * @param key
 */
PersistProxy.prototype.delete = function(key){
    return this._adapter.delete(key);
};
/**
 * @method flush
 */
PersistProxy.prototype.flush = function () {
    return this._adapter.flush();
};


