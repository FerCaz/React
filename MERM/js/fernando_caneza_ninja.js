class Ninja {
    constructor(nombre, salud = 30, velocidad = 3, fuerza = 3) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }
    sayName() {
        console.log("Nombre de ninja: " + this.nombre);
    }
    showStats() {
        this.sayName();
        console.log("Fuerza: " + this.fuerza);
        console.log("Velocidad: " + this.velocidad);
        console.log("Salud: " + this.salud);
    }
    drinkSake() {
        this.salud += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
