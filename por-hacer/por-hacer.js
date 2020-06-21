const fs = require('fs');

let listadoPorHacer = [];

// const guardarDatos = async () => {
//   let datos = JSON.stringify(listadoPorHacer);
//   let crearArchivoResult = await crearArchivo(datos);
//   console.log('archivo creado -->', crearArchivoResult);
// };

// const crearArchivo = (contenido) => {
//     const prom = new Promise((resolve, reject) => {
//         let nombreArchivo = 'tareas.json';
//         let filename = `data/${nombreArchivo}`;
//         fs.writeFile(filename, contenido, (err) => {
//           if(err) reject(err);
//           else resolve(filename);
//         });
//     });
//     return prom;
// };

// const crear = async (descripcion) => {
//   let porHacer = {
//     descripcion,
//     completado: false
//   };
//   listadoPorHacer.push(porHacer);
//   await guardarDatos();
//   return porHacer;
// };


const guardarDatos = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`data/tareas.json`, data, (err) => {
      if(err)
        throw new Error('Error al guardar archivo', err);
    });
  
};

const leerDatos = () => {
  try {
    listadoPorHacer = require('../data/tareas.json');
  } catch (error) {
      listadoPorHacer = [];
  }
};

const crear = (descripcion) => {
  leerDatos();
  let porHacer = {
    descripcion,
    completado: false
  };
  listadoPorHacer.push(porHacer);
  //guardando archivo
  guardarDatos();
  return porHacer;  
};

const getListado = () => {
  leerDatos();
  return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {
  leerDatos();
  //const index = listadoPorHacer.findIndex( (tarea, indx, array) => tarea.descripcion === descripcion );
  const index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );
  //console.log('valor de index es ' + index);
  if(index > -1){
    listadoPorHacer[index].completado = completado;
    guardarDatos();
    return true;
  }
  return false;
};

const eliminar = (descripcion) => {
  leerDatos();
  const f = listadoPorHacer.filter( tarea => tarea.descripcion != descripcion  );
  //console.log(f);
  //console.log(`length f: ${f.length}  listadoph: ${listadoPorHacer.length}`);
  if(f.length != listadoPorHacer.length){
    console.log(`"${descripcion}" borrado con éxito`);
  } else {
    console.log(`"${descripcion}" no encontrado, sin cambios`);
  }
  //listadoPorHacer = []; //no es necesario, con solo asignarlo basta
  listadoPorHacer = f;
  guardarDatos();
};


module.exports = {
  crear,
  getListado,
  actualizar,
  eliminar
};