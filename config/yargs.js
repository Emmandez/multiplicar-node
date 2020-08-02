const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'Crea un archivo que contiene la table de multiplicar del argumento base hasta el limite especificado', opt)
    .help()
    .argv;

module.exports = {
    argv
}