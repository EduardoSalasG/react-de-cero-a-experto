import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";


describe('Prueba en 08-imp-exp', () => {

    test('getHeroeByID debe de retornar un héroe por ID', () => {

        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })

    test('getHeroeByID debe de retornar undefined', () => {

        const id = 6;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy()
    })

    test('getHeroesByOwner debe de retornar un arreglo con los héroes de DC length === 3', () => {

        const owner = 'DC';
        const heroes_ = getHeroesByOwner(owner);

        expect(heroes_.length).toBe(3);
        expect(heroes_).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    })

    test('getHeroesByOwner debe de retornar un arreglo con los héroes de Marvel length === 2', () => {

        const owner = 'Marvel';
        const heroes_ = getHeroesByOwner(owner);

        expect(heroes_.length).toBe(2);
        expect(heroes_).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    })





})