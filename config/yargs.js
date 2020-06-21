const descripcion = {
    alias: 'd',
    demand: true,
    description: 'Descripción de la tarea'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Asigna que la tarea ya fue (o no) completada'
};

//podemos usar, desc o description intercambiablemente

const yargs = require('yargs');


//antes de optimizar
// const arguments = yargs
//   .command( "crear", "crea una tarea por hacer", {
//     descripcion : {
//         alias: 'd',
//         demand: true,
//         description: 'Descripción de la tarea'
//     }})
//   .command('actualizar', 'Actualiza el estado de una tarea', {
//       descripcion: {
//           alias: 'd',
//           demand: true,
//           description: 'Descripción de la tarea'
//       },
//       completado: {
//           alias: 'c',
//           default: true,
//           desc: 'Asigna que la tarea ya fue (o no) completada'
//       }
//   })
//   .command('listar', 'Muestra la lista de tareas')
//   .command('eliminar', 'elimina la tarea', {
//       descripcion: {
//           alias: 'd',
//           demand: true,
//           description: 'Descripción de la tarea'
//       }
//   })
//   .help().argv;

//optimizado
const arguments = yargs
  .command( "crear", "crea una tarea por hacer", { descripcion })
  .command('actualizar', 'Actualiza el estado de una tarea', { descripcion, completado })
  .command('listar', 'Muestra la lista de tareas')
  .command('eliminar', 'elimina la tarea', { descripcion })
  .help().argv;

/**
* node app 
*   crear -d "una tarea nueva"
*   crear -descripcion "una tarea nueva"
* 
*   actualizar -d "tarea pendiente" -c false
*   actualizar -descripcion "tarea pendiente" -completado false
* 
*   listar

    eliminar -d "sacar al perro"
    eliminar -descripcion "sacar al perro"
 * 
 * 
 */


  module.exports = {
      arguments
  };