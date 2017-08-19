/**
 * @class TallerVehiculos
 * @constructor
 */
function TallerVehiculos(){

    this.vehiculos = [];

    this.nombreTaller = 'Reparaciones Tigre Palenque C.A.';

}

/**
 * @method getVehicles
 * @returns {Array}
 */
TallerVehiculos.prototype.getVehicles = function(){
    return this.vehiculos;
};
/**
 * @method addVehicle
 * @param Vehicle
 * @returns {boolean}
 */
TallerVehiculos.prototype.addVehicle = function(Vehicle){
    var flag = false;

    for(var i = 0 ; i < this.vehiculos.length ; i++){
        if(this.vehiculos[i].placa === Vehicle.placa){
            flag = true;
            return false;
        }
    }

    if(!flag){
        this.vehiculos.push(Vehicle);
    }
};
/**
 * @method findVehicle
 * @param placa
 * @returns {*}
 */
TallerVehiculos.prototype.findVehicle = function (placa) {
    for(var i = 0; i < this.vehiculos.length ; i++){
        if(this.vehiculos[i].placa === placa){
            return this.vehiculos[i];
        }
    }

    return null;
};
/**
 * @method removeVehicle
 * @param placa
 */
TallerVehiculos.prototype.removeVehicle = function (placa) {
    for(var i = 0; i < this.vehiculos.length ; i++){
        if(this.vehiculos[i].placa === placa){
            this.vehiculos.splice(i,1);
        }
    }
};