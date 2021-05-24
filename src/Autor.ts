class Autor{
    private nombre: String
    private apellido: String
    private edad :Number
   


    public setNombre(n : String){
        this.nombre = n
    }

    public getNombre() : String {
        return this.nombre

    }

    public setApellido (a:String){
        this.apellido = a
    }
    public getApellido() :String {
        return this.apellido
    }

    public setEdad (e:Number){
        this.edad = e
    }
    public getEdad(): Number{
        return this.edad
    }


}