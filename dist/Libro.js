var Libro = /** @class */ (function () {
    function Libro() {
    }
    Libro.prototype.setNombreDeLibro = function (l) {
        this.nombreDeLibro = l;
    };
    Libro.prototype.getNombreDeLibro = function () {
        return this.nombreDeLibro;
    };
    Libro.prototype.setGeneroDelLibro = function (n) {
        this.generoDelLibro = n;
    };
    Libro.prototype.getGeneroDelLibro = function () {
        return this.generoDelLibro;
    };
    Libro.prototype.setAño = function (a) {
        this.año = a;
    };
    Libro.prototype.getAño = function () {
        return this.año;
    };
    return Libro;
}());

module.exports = {Libro}
