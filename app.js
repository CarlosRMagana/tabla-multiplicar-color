//const { boolean } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
console.clear();

//* Manejo de comandos sobre terminal */

//console.log(process.argv);

//* Codigo de uso de comandos */
// const [, , arg3 = 'base = 5'] = process.argv;
// const [, base = 5] = arg3.split('=');

//console.log( base );

//* Uso de yargs */
// console.log(process.argv);
//console.log(argv);

//console.log('base: yargs', argv.b);


// const base = 8;

crearArchivo(argv.b, argv.l, argv.h)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`.black.bgBrightCyan))
    .catch(e => console.log(e));