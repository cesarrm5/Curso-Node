
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs')
const colors = require('colors')


console.clear();

console.log(argv.b)
console.log('base:yargs ', argv.base)
crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,'Creado'))
    .catch(err=> console.log(err));