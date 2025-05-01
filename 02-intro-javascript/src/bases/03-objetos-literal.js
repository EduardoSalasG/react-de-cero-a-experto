

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 333333,
        lat: 14.3232,
        lng: 34.93933333
    }



};



console.log(persona);


const persona2 = { ...persona };

persona2.nombre = 'Peter';

console.log(persona2);
console.log(persona);