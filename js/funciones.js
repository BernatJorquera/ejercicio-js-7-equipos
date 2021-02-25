const equiposMayoresEdad = (equipos, edad) => {
  return equipos.filter(elemento => elemento.asignado.empleado.edad > edad);
}

const equiposProvincia = (equipos, provincia) => {
  return equipos.filter(elemento => elemento.asignado.provincia.toLowerCase() === provincia.toLowerCase());
}

function provincias(equipos) {
  const provinciasArray = [];
  for (let i in equipos) {
    if (!provinciasArray.includes(equipos[i].asignado.provincia)) {
      provinciasArray.push(equipos[i].asignado.provincia)
    }
  }
  return provinciasArray;
}
const edadMedia = equipos => {
  return equipos.reduce((acc, elemento) => acc + elemento.asignado.empleado.edad, 0) / equipos.length;
}

const equiposPorEdad = equipos => {
  const edades = equipos.map(elemento => elemento.asignado.empleado.edad);
  let equiposOrdenados = [];
  for (let i in equipos) {
    let edadMaxima = Math.max(...edades);
    equiposOrdenados.push(equipos[edades.indexOf(edadMaxima)]);
    edades[edades.indexOf(edadMaxima)] = 0;
  }
  return equiposOrdenados.reverse();
}

const equiposTipo = (elementos, tipo) => elementos.filter(elemento => elemento.tipo === tipo);

const trabajadoresTipo = (elementos, tipo) => elementos
  .filter(elemento => elemento.tipo === tipo)
  .map(elemento => elemento.asignado.empleado);

const equiposTipoLocalidad = (elementos, tipo, localidad) =>
  elementos.filter(
    elemento => (elemento.tipo === tipo)
      && (elemento.asignado.poblacion === localidad
        || elemento.asignado.provincia === localidad));


class Resumen {
  id;
  poblacion;
  provincia;

  constructor(num, localidad1, localidad2) {
    this.id = num;
    this.poblacion = localidad1;
    this.provincia = localidad2;
  }
}

function resumenEquipos(elementos) {
  let resumenFinal = [];
  for (let i in elementos) {
    resumenFinal[i] = new Resumen(elementos[i].id, elementos[i].asignado.poblacion, elementos[i].asignado.provincia);
  }
  return resumenFinal;
}
