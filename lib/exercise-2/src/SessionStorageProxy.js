/**
 * @class SessionStorageProxy
 * @constructor
 */
function SessionStorageProxy() {

    this.keyStorage = 'sessionCache';

    this._cacheValues = (sessionStorage.getItem(this.keyStorage)) ? JSON.parse(sessionStorage.getItem(this.keyStorage)) : {};

}

/**
 * @method save
 * @param key
 * @param value
 */
SessionStorageProxy.prototype.save = function(key,value){
    this._cacheValues[key] = value;
    sessionStorage.setItem(this.keyStorage , JSON.stringify(this._cacheValues));
};
/**
 * @method get
 * @param key
 * @returns {*}
 */
SessionStorageProxy.prototype.get = function(key){

    if(this._cacheValues[key]){
        return this._cacheValues[key];
    }

    return null;
};
/**
 * @method delete
 * @param key
 */
SessionStorageProxy.prototype.delete = function(key){
    this._cacheValues = JSON.parse(sessionStorage.getItem(this.keyStorage));

    if(this._cacheValues[key]){
        delete this._cacheValues[key];
        sessionStorage.setItem(this.keyStorage , JSON.stringify(this._cacheValues));
    }
};
/**
 * @method flush
 */
SessionStorageProxy.prototype.flush = function(){
    this._cacheValues = [];
    sessionStorage.setItem(this.keyStorage , '');
};