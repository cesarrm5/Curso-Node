const uuid = require('uuid');

class Tarea {
    id = '';
    desc = '';
    completadoEn = null;

    constructor(desc){
        this.id = uuid.v4();;
        this.desc = desc;
        this.completadoEn = null;
    }
}


module.exports = Tarea;