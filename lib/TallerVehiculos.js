/**
 * @class TallerVehiculos
 * @constructor
 */
function TallerVehiculos(){

    this.vehiculos = [];

    this.nombreTaller = 'Reparaciones Tigre Palenque C.A.';

}

TallerVehiculos.prototype.getVehicles = function(){
    return this.vehiculos;
};

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

TallerVehiculos.prototype.findVehicle = function (placa) {
    for(var i = 0; i < this.vehiculos.length ; i++){
        if(this.vehiculos[i].placa === placa){
            return this.vehiculos[i];
        }
    }

    return null;
};

TallerVehiculos.prototype.removeVehicle = function (placa) {
    for(var i = 0; i < this.vehiculos.length ; i++){
        if(this.vehiculos[i].placa === placa){
            this.vehiculos.splice(i,1);
        }
    }
};