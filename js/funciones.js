const equiposMayoresEdad = (equipos, edad) => {
  return equipos.filter(elemento => elemento.asignado.empleado.edad > edad);
}

const equiposProvincia = (equipos, provincia) => {
  return equipos.filter(elemento => elemento.asignado.provincia.toLowerCase() === provincia.toLowerCase());
}



const provincias





/*let equipos2 = [...equipos]

function provincias1(equipos, provincia) {
  if (provincia = "Barcelona") {
    provincias1 = "Equipos Barcelona"
  } else {
    provincias1 = "Equipos Tarragona"
  }
}
provincias1();
const provincias = equipos2.map((paciente) => paciente.provincia.provincias1);
return provincias {
}; */



function provincias(equipos) {
  const provinciasArray = [];
  for (let i in equipos) {
    if (!provinciasArray.includes(equipos[i].asignado.provincia)) {
      provinciasArray.push(equipos[i].asignado.provincia)
    }
  }
  return provinciasArray;
}
console.log(provincias(equipos));
