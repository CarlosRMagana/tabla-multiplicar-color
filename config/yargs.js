const { describe } = require('yargs');

const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra las tablas de multiplicar'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Hasta que numero quieres la tabla de multiplicar'
                })
                .check( (argv, options) => {
                    if (isNaN(argv.b)) {
                        throw ('El valor debe un número');
                    }
                    return true;
                })
                .argv;

module.exports = argv;