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

class Sensei extends Ninja {
    constructor(nombre, sabiduria = 10) {
        super(nombre, 200, 10, 10, sabiduria);
    }
    speakWisdom() {
        super.drinkSake();
        console.log(
            "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
        );
    }
    showStats() {
        super.showStats();
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();