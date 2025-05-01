import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Prueba en 11-async-await.test.js', () => {

    test('getImagen debe retornar un URL de la imagen', async () => {

        const url = await getImagen()
        expect(typeof url).toBe('string')

    })


})