var colors = require('colors/safe');
const Tarea = require('./tarea')

class Tareas {
    _listado = {};

    get listadoArr(){

        const listado = [];
        Object.keys(this._listado).forEach( key=>{
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    }

    constructor(){
        this._listado = {};
    }

    cargarTareasFromArray(tareas =[]){
        tareas.forEach((tarea)=>{
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(desc =  ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){
        let contador = 1;
        this.listadoArr.forEach((tarea)=>{
            console.log( colors.red(contador) + `. ${tarea.desc} :: ${tarea.completadoEn? "Completada".green:"Pendiente".red}`)
            contador=contador+1;
        })
    }
    
    listarPendientesCompletadas(Completada){

    }
}


module.exports = Tareas;