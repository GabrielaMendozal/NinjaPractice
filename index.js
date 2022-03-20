class Ninja{
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 0;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName =() => console.log( this.nombre);
    
    showStats = () => console.log(this.nombre,this.velocidad,this.fuerza);

    drinkSake = () => console.log( this.salud + 10);
}

let ninja1 = new Ninja ("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();