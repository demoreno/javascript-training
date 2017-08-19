/**
 * @class Vehiculo
 * @param modelo
 * @param marca
 * @param placa
 * @param color
 * @constructor
 */
function Vehiculo(modelo , marca , placa , color){

    this.modelo = modelo;

    this.marca  = marca;

    this.placa  = placa;

    this.color  = color;

}

/**
 * @method getModelo
 * @returns {*}
 */
Vehiculo.prototype.getModelo = function(){
    return this.modelo;
};
/**
 * @method setModelo
 * @param modelo
 */
Vehiculo.prototype.setModelo = function(modelo){
    this.modelo = modelo;
};
/**
 * @method getMarca
 * @returns {*}
 */
Vehiculo.prototype.getMarca = function(){
    return this.marca;
};
/**
 * @setMarca
 * @param marca
 */
Vehiculo.prototype.setMarca = function(marca){
    this.marca = marca;
};

/**
 * @method getPlaca
 * @returns {*}
 */
Vehiculo.prototype.getPlaca = function(){
    return this.placa;
};

/**
 * @method setPlaca
 * @param placa
 */
Vehiculo.prototype.setPlaca = function(placa){
    this.placa = placa;
};

/**
 * @method getColor
 * @returns {*}
 */
Vehiculo.prototype.getColor = function(){
    return this.color;
};
/**
 * @method setColor
 * @param color
 */
Vehiculo.prototype.setColor = function(color){
    this.color = color;
};

