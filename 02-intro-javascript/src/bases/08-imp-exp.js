// import { heroes } from './data/heroes.js'
import heroes, { owners } from '../data/heroes.js'


export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id)

// console.log(getHeroeById(2));

export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)

// console.log(getHeroesByOwner('Marvel'))
// console.log(owners);