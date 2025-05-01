import { fireEvent, render, screen } from '@testing-library/react'
import { CounterApp } from "../../src/CounterApp/CounterApp"

describe('Prueba en <CounterApp/>', () => {

    const value = 10;

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={value} />)
        expect(container).toMatchSnapshot();
    })

    test('Debe mostar el valor inicial de 100', () => {
        render(<CounterApp value={100} />);
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe('100');
        expect(screen.getByText('100')).toBeTruthy();
    })

    test('Debe incrementar con el botón +1', () => {

        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
    });

    test('Debe decrementar con el botón -1', () => {

        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('-1'));
        screen.debug();
        expect(screen.getByText('9')).toBeTruthy();
    });

    test('Debe funcionar el botón reset', () => {

        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        // screen.debug()
        // fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        // expect(screen.getByText(`${value}`)).toBeTruthy();
        expect(screen.getByText(`${value}`)).toBeTruthy();
    });



})