class Cuadrado {
  constructor(lado1) {
    this.lado1 = lado1;
  }

  area() {
    return `El area es ${this.lado1 * this.lado1}cm`;
  }

  perimetro() {
    let per = 0;
    for (let i = 1; i <= 4; i++) {
      //suyo
      per += this.lado1;
    }
    return `El perimetro es ${per}cm`;
  }
}

class Rectangulo extends Cuadrado {
  constructor(lado1, lado2) {
    super(lado1);
    this.lado2 = lado2;
  }

  areaRec() {
    return `El area es ${this.lado1 * this.lado2}cm`;
  }

  perimetroRec() {
    let ancho = this.lado2 + this.lado2;
    let alto = this.lado1 + this.lado1;

    let per = ancho + alto;

    return `El perimetro es ${per}cm`;
  }
}

let cuadrado = new Cuadrado(8);
let rectangulo = new Rectangulo(8, 16);

//console.log(forma.area())
//console.log(forma.perimetro())

console.log(rectangulo.areaRec());
console.log(rectangulo.perimetroRec());
