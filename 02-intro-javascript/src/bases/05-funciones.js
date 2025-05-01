//Funciones en Js

const saludar = function saludar(nombre) {
    return `Hola, ${nombre}`
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola, Mundo`;

console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Vegeta'));
console.log(saludar4());

const getUser = () =>
({
    uid: 'ABC213',
    username: 'El_Papi1502'
})

const user = getUser();


console.log(user)

// Tarea

const getUsuarioActivo = (nombre) => (
    {
        uid: 'ABC123',
        username: nombre
    })


const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);