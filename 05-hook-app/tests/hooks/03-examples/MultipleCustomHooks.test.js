import { fireEvent, render, renderHook, screen } from '@testing-library/react'
import { MultipleCustomHooks } from '../../../src/03-examples/MultipleCustomHooks'
import { useFetch } from '../../../src/hooks/useFetch'
import { useCounter } from '../../../src/hooks/useCounter'


jest.mock('../../../src/hooks/useFetch')
jest.mock('../../../src/hooks/useCounter')


describe('Pruebas en MultipleCustomHooks', () => {

    test('Debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Cargando...'))
        expect(screen.getByText('Información de Pokemon'))

        const previousButton = screen.getByRole('button', { name: 'Anterior' })
        const nextButton = screen.getByRole('button', { name: 'Siguiente' })

        // screen.debug()
    })

    test('Debe mostrar un pokemon', () => {

        useFetch.mockReturnValue({
            data: {
                id: 1,
                name: 'Pokemon name',
                sprites: [
                    { front_default: 'URL' },
                    { front_shiny: 'URL' },
                    { back_default: 'URL' },
                    { back_shiny: 'URL' },
                ],
            },
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        // screen.debug()
        expect(screen.getByText(`#1 - Pokemon name`)).toBeTruthy();
    })

    test('Debe llamar la función de incrementar', () => {

        // const { result } = renderHook(() => useCounter())

        // const { increment } = result.current;

        useFetch.mockReturnValue({
            data: {
                id: 1,
                name: 'Pokemon name',
                sprites: [
                    { front_default: 'URL' },
                    { front_shiny: 'URL' },
                    { back_default: 'URL' },
                    { back_shiny: 'URL' },
                ],
            },
            isLoading: false,
            hasError: null
        });

        const mockIncrement = jest.fn();
        const mockDecrement = jest.fn();


        useCounter.mockReturnValue({
            counter: 1,
            increment: mockIncrement,
            decrement: mockDecrement,
            reset: jest.fn()
        })

        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', { name: 'Siguiente' })

        fireEvent.click(nextButton)

        expect(mockIncrement).toHaveBeenCalled()

        // screen.debug()

    })


})