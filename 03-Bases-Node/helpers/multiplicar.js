const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors')

const crearArchivo = async (base=5, listar ) =>{

    try{

        let salida = '';
        
        for (let index = 1; index < 11; index++) {
           salida += `${base} ${'x'.green} ${index} ${'='.green} ${index*base}\n`;
        }
        if(listar==true){
            console.log('==============================='.green);
            console.log('       Tabla del: '.green, colors.blue(base) );
            console.log('==============================='.green);
            console.log(salida);    
        }   
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return (`Tabla-${base}.txt`);    
        
    }catch(err){
        throw err;
    }

}

module.exports = {
    crearArchivo
}