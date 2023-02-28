
var nombre = "Milagros";

console.log("Nombre vale: "+nombre);


let longitud = 16;                  // Numero

let Apellido = "Gudiño";          // Cadena de texto

let x =  {Nombre: "Michelle", Apellido: "Gudiño"};    // Objeto

var edad = 18;

if (edad >= 18) { 
    console.log("la persona es mayor de edad")
} else { 
    console.log("la persona es menor de edad")
}

//for (inicializador, condicion, incremento/decremento)

var x = 0;
for (x ; x < 5; x++) { 
    console.log("el valor de x es:" +x);
}


function sumar(a,b) { 
    var resultado = a+b;

    return resultado;
}
suma = sumar(3,4);
console.log(suma);
