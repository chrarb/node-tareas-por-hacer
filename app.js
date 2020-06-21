const argv = require('./config/yargs').default.arguments;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

//antes
//const argv = require('yargs').argv;
//console.log(argv);

//argv = el objeto con el que queremos trabajar, e.g. { _: [ 'crear' ], d: 'comer', descripcion: 'comer', '$0': 'app' }
//console.log(argv);


let comando = argv._[0];

switch (comando) {
    case 'crear':
      //console.log('Crear una tarea');

      //console.log(argv.descripcion);

      // let crearTarea = async () => {
      //   let tarea = await porHacer.crear(argv.descripcion);
      //   console.log(tarea);
      // };
      // crearTarea();

      porHacer.crear(argv.descripcion);

    break;
    
    case 'listar':
      //console.log('Listar tareas por hacer');
      const tareas = porHacer.getListado();
      if(tareas.length > 0) {
        // console.log("---------------------------".green);
        // console.log('-- Lista de Tareas        -');
        // console.log("---------------------------".green);
        for(let t of tareas){
          console.log('======================Por Hacer========================'.green);
          //console.log(`${t.descripcion} - ${(t.completado)?'COMPLETADO':'NO COMPLETADO'}`);
          console.log(t.descripcion);
          console.log(`${(t.completado)?'COMPLETADO':'NO COMPLETADO'}`);
          console.log('======================================================='.green);
        }
        console.log('>fin');
      } else {
        console.log('No hay tareas aun');
      }
    break;
    
    case 'actualizar':
      
      //console.log(`Actualizar una tarea por hacer`);
      //porHacer.actualizar('comprar tortillas', false);
      //const completado = (argv.completado == 'true');

      //validación para aceptar solo valores boleanos
      let completado = false;
      // boolean  string
      //console.log(typeof argv.completado);
      if(typeof argv.completado === 'boolean'){
        completado = argv.completado;
      } else {
        completado = (argv.completado == 'true');
      }
      //actualizando
      const res = porHacer.actualizar(argv.descripcion, completado);
      console.log((res)?'actualización exitosa':'tarea no encontrada');

    break;

    case 'eliminar':
    
      porHacer.eliminar(argv.d);

    break;

    default:
      console.log(`Comando no reconocido`);
    break;
}