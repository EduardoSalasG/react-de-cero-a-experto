import { useCounter } from "../../src/hooks/useCounter"
import { act, renderHook } from '@testing-library/react'


describe('Pruebas en el useCounter', () => {

    test('Debe de retornar los valores por defecto', () => {

        const { result } = renderHook(() => useCounter());

        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('Debe generar el counter con el valor de 100', () => {
        const { result } = renderHook(() => useCounter(100));

        const { counter } = result.current;

        expect(counter).toBe(100);
    });

    test('Debe incrementar el contador', () => {

        const { result } = renderHook(() => useCounter(100));

        const { increment } = result.current;

        act(() => {
            increment();
            increment(2);
        })

        expect(result.current.counter).toBe(103);
    })

    test('Debe decrementar el contador', () => {

        const { result } = renderHook(() => useCounter(100));

        const { decrement } = result.current;

        act(() => {
            decrement();
            decrement(2);
        })

        expect(result.current.counter).toBe(97);
    })

    test('Debe de realizar el reset', () => {

        const { result } = renderHook(() => useCounter(100));

        const { reset, decrement } = result.current;

        act(() => {
            decrement()
            reset();
        })

        expect(result.current.counter).toBe(100);
    })





})