const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 7, listar = false, hasta) => {

    try {

        let salida = '';
        let consola = '';
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${colors.brightYellow(base)} ${"x".green} ${colors.brightYellow(i)} = ${colors.brightCyan(base * i)}\n`.brightGreen;
        }
        
        if (listar) {
            
            console.log('*********************************'.america);
            console.log(`The multiplication table of: ${colors.white(base)}`.brightGreen);
            console.log('*********************************'.america);

            console.log(consola);
        }

        fs.writeFileSync(`./salida/multiplication-table ${base}.txt`, salida) 

        return`tabla del ${base} guardada en multiplication-table.txt`;

    } catch (error) {
        
        throw error;
    }
        
}

module.exports = {
    crearArchivo
}