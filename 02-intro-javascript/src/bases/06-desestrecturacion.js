// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Capi'
}

const { nombre, edad, clave } = persona;


// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona.clave)

// console.log(nombre)
// console.log(edad)
// console.log(clave)

const useContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {


    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 31.3434324,
            lng: -12.33434343
        }
    }

}

const { nombreClave, anios, latlng: { lat, lng } } = useContext(persona);

console.log(nombreClave, anios)
console.log(lat, lng)