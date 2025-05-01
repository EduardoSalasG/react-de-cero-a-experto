import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Pruebas en 06-deses-obj', () => {

    test('usContext debe devolver un objeto', () => {

        const clave = 'Nombre clave';

        const edad = 5;

        const user = usContext({ clave, edad });
        console.log(user)

        expect(user).toStrictEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })
    })
})