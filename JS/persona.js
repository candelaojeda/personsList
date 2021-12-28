class Persona{
    constructor(nombre, apellido, cantidad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._cantidad = cantidad; //agregado
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }

    //agregado de cantidad:
    get cantidad(){
        return this._cantidad;
    }
    set nombre(nombre){
        this._cantidad = this.cantidad;
    }

}
