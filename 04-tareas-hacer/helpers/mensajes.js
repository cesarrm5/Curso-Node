const { resolve } = require('path');

require('colors');

const mostrarMenu = ()=>{

    return new Promise(resolve =>{

        console.clear();
        console.log('======================='.green);
        console.log('Seleccione una opción:'.green)
        console.log('======================='.green);
    
        console.log(`${'1.'.green } Crear tarea`);
        console.log(`${'2.'.green } Listar Tareas`);
        console.log(`${'3.'.green } Listar Tareas Completas`);
        console.log(`${'4.'.green } Listar Tareas Pendientes`);
        console.log(`${'5.'.green } Completar Tarea(s)`);
        console.log(`${'6.'.green } Borrar Tareas`);
        console.log(`${'1.'.green } Crear tarea`);
        console.log(`${'0.'.green } Salir`);
    
        const readline = require('readline').createInterface({
         input: process.stdin,
         output: process.stdout
        });
        
        readline.question('Seleccione una opción: ', (opt) =>{
            console.log({opt});
            resolve(opt);
            readline.close();
        })
    
    })

}

const pausa = () =>{

    return new Promise (resolve =>{

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        readline.question(`\nPresione ${'ENTER'.green} para continuar \n`, (opt) =>{
            readline.close();
            resolve();
        })
    });   
}

module.exports = {
    mostrarMenu,
    pausa
}