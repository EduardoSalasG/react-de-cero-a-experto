import { render, screen } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('Pruebas en <FirstApp/>>', () => {

    const title = 'Hola, soy Persona';
    const subTitle = 'Soy el subtítulo';

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<FirstApp title={title} />)
        expect(container).toMatchSnapshot();
    })

    test('Debe mostar el mensaje "Hola, soy Persona', () => {

        render(<FirstApp title={title} />)
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('Debe mostrar el título en un h1', () => {
        render(<FirstApp title={title} />)
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    })

    test('Debe mostrar el subtítulo enviado por props', () => {

        render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />)
        expect(screen.getAllByText(subTitle).length).toBe(2);
    })
})