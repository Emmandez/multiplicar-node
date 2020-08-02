const fs = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        let nombreArchivo = `tabla-${base}.txt`;
        let data = '';

        if (!Number(base)) {
            reject('No es un Numero')
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${i * base}\n`);
        }

        fs.writeFile(`tablas/${nombreArchivo}`, data, (err) => {

            if (err) reject(err)
            else
                resolve(nombreArchivo);
        });

    });
}

let listarTabla = (base, limite) => {
    console.log('============================='.green);
    console.log(`=====tabla de ${ base}=============`.green);
    console.log('============================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${i} * ${base} = ${ i * base }`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
};