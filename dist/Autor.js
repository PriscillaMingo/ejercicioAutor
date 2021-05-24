var Autor = /** @class */ (function () {
    function Autor() {
    }
    Autor.prototype.setNombre = function (n) {
        this.nombre = n;
    };
    Autor.prototype.getNombre = function () {
        return this.nombre;
    };
    Autor.prototype.setApellido = function (a) {
        this.apellido = a;
    };
    Autor.prototype.getApellido = function () {
        return this.apellido;
    };
    Autor.prototype.setEdad = function (e) {
        this.edad = e;
    };
    Autor.prototype.getEdad = function () {
        return this.edad;
    };
    return Autor;
}());

module.exports ={Autor}
