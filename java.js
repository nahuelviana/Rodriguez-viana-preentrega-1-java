let nombre;
do {
  nombre = prompt("Ingrese su nombre");
  if (!/^[a-zA-Z]+$/.test(nombre)) {
    alert("Ingresar solo valores alfabéticos");
  }
} while (!/^[a-zA-Z]+$/.test(nombre));

let opciones = {
  1: { nombre: "hamburguesa", valor: 1000 },
  2: { nombre: "pizza", valor: 1500 },
  3: { nombre: "tarta", valor: 800 },
};

let opcionSeleccionada = parseInt(
  prompt(`Hola ${nombre}, ¿qué quisiera ordenar?:
1. hamburguesa - $${opciones[1].valor}
2. pizza - $${opciones[2].valor}
3. tarta - $${opciones[3].valor}`)
);

let opcion = opciones[opcionSeleccionada]?.nombre;
let opcionValor = opciones[opcionSeleccionada]?.valor;

if (!opcion) {
  alert("Opción inválida. Seleccione una opción válida");
  opcionSeleccionada = 0;
}

let efectivo;
do {
  efectivo = prompt("Ingrese el efectivo que posee.");
  if (isNaN(efectivo)) {
    alert("Debes ingresar valores numéricos");
  }
} while (isNaN(efectivo));
const tarjeta = 500;

alert("El dinero que posee la tarjeta es de" + " " + tarjeta);
let disponible = parseInt(efectivo) + tarjeta;
alert(`El dinero disponible es: $${disponible}`);

if (!opcionValor) {
  alert("Opción inválida. Seleccione una opción válida");
} else if (disponible >= opcionValor) {
  alert("Puedes comprar la " + opcion);
} else {
  let faltante = opcionValor - disponible;
  let resultadototal;
  for (let i = 1; ; i++) {
    let resto = prompt(
      "Faltan $" + faltante + " para abonar la opción seleccionada"
    );
    resultadototal = parseInt(resto) + disponible;
    if (resultadototal >= opcionValor) {
      alert("Gracias por su compra");
      break;
    } else if (resultadototal < opcionValor) {
      faltante = opcionValor - disponible;
    }
  }
}
