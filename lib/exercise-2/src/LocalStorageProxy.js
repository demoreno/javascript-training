/**
 * @class LocalStorageProxy
 * @constructor
 */
function LocalStorageProxy() {

    this.keyStorage = 'localCache';

    this._cacheValues = (localStorage.getItem(this.keyStorage)) ? JSON.parse(localStorage.getItem(this.keyStorage)) : {};

}

/**
 * @method save
 * @param key
 * @param value
 */
LocalStorageProxy.prototype.save = function(key,value){
    this._cacheValues[key] = value;
    localStorage.setItem(this.keyStorage , JSON.stringify(this._cacheValues));
};
/**
 * @method get
 * @param key
 * @returns {*}
 */
LocalStorageProxy.prototype.get = function(key){

    if(this._cacheValues[key]){
        return this._cacheValues[key];
    }

    return null;
};
/**
 * @method delete
 * @param key
 */
LocalStorageProxy.prototype.delete = function(key){
    this._cacheValues = JSON.parse(localStorage.getItem(this.keyStorage));

    if(this._cacheValues[key]){
        delete this._cacheValues[key];
        localStorage.setItem(this.keyStorage , JSON.stringify(this._cacheValues));
    }
};
/**
 * @method flush
 */
LocalStorageProxy.prototype.flush = function(){
    this._cacheValues = [];
    localStorage.setItem(this.keyStorage , '');
};

