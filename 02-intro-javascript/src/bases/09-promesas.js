import { getHeroeById } from './bases/08-imp-exp'

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //Tarea 
//         // Importen el 
//         const p1 = getHeroeById(2)
//         console.log(p1)
//         // resolve(p1);
//         reject('No se pudo encontrar el héroe')

//     }, 2000);
// });


// promesa.then((heroe) => {
//     console.log('Heroe: ', heroe)
// })
//     .catch(err => console.warn(err))


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id)
            if (!p1) {
                reject('No se pudo encontrar el héroe')
            }
            else {
                resolve(p1)
            }
        }, 2000);
    });
}

getHeroeByIdAsync(10)
    .then(console.log)
    .catch(console.warn)
