import { render, screen } from '@testing-library/react'
import { GifItem } from "../../src/components/GifItem"


describe('Estos son los tests del componente GifItem', () => {
    const props = {
        title: 'Looking Around Dan Levy GIF by Saturday Night Live',
        url: 'https://media1.giphy.com/media/IsYt1rfEu0Zv1FjK19/giphy-downsized-medium.gif?cid=77735f64p8247wq9qs819vbevxuiud5p9o82gal35nk3ojf1&ep=v1_gifs_search&rid=giphy-downsized-medium.gif&ct=g'
    }

    test('La imagen debe mostrar el alt y src', () => {

        render(<GifItem {...props} />)

        // expect(screen.getByRole('paragraph').innerHTML).toBe(props.title);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(props.url);
        expect(alt).toBe(props.title);

    })

    test('El componente debe mostrar el título', () => {

        render(<GifItem {...props} />)
        expect(screen.getByText(props.title)).toBeTruthy();
        expect(screen.getByRole('paragraph').innerHTML).toBe(props.title);
    })



    test('El componente debe mostrar el title y url por defecto', () => {
        const title = 'Titulo por defecto'
        const url = 'https://media2.giphy.com/media/mxXPuScIwPwK2oyD6i/giphy.gif?cid=77735f64p8247wq9qs819vbevxuiud5p9o82gal35nk3ojf1&ep=v1_gifs_search&rid=giphy.gif&ct=g'

        render(<GifItem />)
        expect(screen.getByRole('paragraph').innerHTML).toBe(title);
        expect(screen.getByRole('img').getAttribute('src')).toBe(url);
    })
})