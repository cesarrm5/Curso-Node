const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, 
    pausa,
    leerInput
} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

//const { inquireMenu } = require('./helpers/');
require('colors');


console.clear();

const main = async()=>{
    
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB){
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        //esta funcion Imprime el menu
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                    const desc = await leerInput('Descripcion:');
                    tareas.crearTarea(desc);
                break;
            case '2':

                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarPendientesCompletadas();
                break;
                
            default:
                break;
        }
        guardarDB(tareas.listadoArr);

        await pausa();

    }while (opt !== '0');

    
}

main();
