function TallerVehiculos(){this.vehiculos=[],this.nombreTaller="Reparaciones Tigre Palenque C.A."}function Vehiculo(o,e,t,i){this.modelo=o,this.marca=e,this.placa=t,this.color=i}TallerVehiculos.prototype.getVehicles=function(){return this.vehiculos},TallerVehiculos.prototype.addVehicle=function(o){for(var e=!1,t=0;t<this.vehiculos.length;t++)if(this.vehiculos[t].placa===o.placa)return e=!0,!1;e||this.vehiculos.push(o)},TallerVehiculos.prototype.findVehicle=function(o){for(var e=0;e<this.vehiculos.length;e++)if(this.vehiculos[e].placa===o)return this.vehiculos[e];return null},TallerVehiculos.prototype.removeVehicle=function(o){for(var e=0;e<this.vehiculos.length;e++)this.vehiculos[e].placa===o&&this.vehiculos.splice(e,1)},Vehiculo.prototype.getModelo=function(){return this.modelo},Vehiculo.prototype.setModelo=function(o){this.modelo=o},Vehiculo.prototype.getMarca=function(){return this.marca},Vehiculo.prototype.setMarca=function(o){this.marca=o},Vehiculo.prototype.getPlaca=function(){return this.placa},Vehiculo.prototype.setPlaca=function(o){this.placa=o},Vehiculo.prototype.getColor=function(){return this.color},Vehiculo.prototype.setColor=function(o){this.color=o};