 class Libro{
    private nombreDeLibro: String
    private generoDelLibro: String
    private año: Number


    public setNombreDeLibro(l : String){
        this.nombreDeLibro = l 
    }

    public getNombreDeLibro () : String {
        return this.nombreDeLibro 

    }
    
    public setGeneroDelLibro(n : String){
        this.generoDelLibro = n
    }

    public getGeneroDelLibro() : String {
        return this.generoDelLibro

    }
    public setAño(a : Number){
        this.año = a
    }

    public getAño() : Number {
        return this.año

    }
    
}
