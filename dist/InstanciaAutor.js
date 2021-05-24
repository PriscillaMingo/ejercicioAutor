let {Autor} = require ('./Autor')
let {Libro} = require ('./Libro')


var Escritor = new Autor

Escritor.setNombre ('Herbert')

console.log (Escritor.getNombre ())

var Escritor = new Autor
Escritor.setApellido ('Schildt')
console.log (Escritor.getApellido ())

var Escritor = new Autor
Escritor.setEdad ('70 años')
console.log (Escritor.getEdad ())

var Ejemplar = new Libro
Ejemplar.setNombreDeLibro ('Programacion en turbo C')
console.log (Ejemplar.getNombreDeLibro ())

var Ejemplar = new Libro
Ejemplar.setGeneroDelLibro ('Informatica')
console.log (Ejemplar.getGeneroDelLibro ())

var Ejemplar = new Libro
Ejemplar.setAño (1990)
console.log (Ejemplar.getAño ())

