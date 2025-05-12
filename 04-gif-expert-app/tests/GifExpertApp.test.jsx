import { fireEvent, render, screen } from '@testing-library/react'

import GifExpertApp from "../src/GifExpertApp"

describe('Pruebas en GifExpertApp', () => {

    test('Se agrega una categoría que no exista', () => {
        render(<GifExpertApp />);

        const value = 'Perros'
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value } })
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2)

        // screen.debug();
    })

    test('Se agrega una categoría que exista', () => {
        render(<GifExpertApp />);

        const value = 'One Punch'
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value } })
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1)

        // screen.debug();
    })
})