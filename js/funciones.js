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

