const equiposMayoresEdad = (equipos, edad) => {
  return equipos.filter(elemento => elemento.asignado.empleado.edad > edad);
}
