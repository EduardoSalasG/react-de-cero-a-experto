import { useEffect, useState } from 'react';

import { GifItem } from './GifItem';

import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    if (!category) {
        throw new Error('category is required ')
    }

    if (typeof category !== 'string') {
        throw new Error('category must be a string')
    }

    const { images, isLoading } = useFetchGifs(category)

    // const [images, setImages] = useState([])
    // const [isLoading, setIsLoading] = useState(true)

    // const getImages = async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    //     setIsLoading(false);
    // }

    // useEffect(() => {
    //     getImages();
    // }, [])

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className='card-grid'>
                {images.map((image) =>
                (
                    <GifItem
                        key={image.id}
                        {...image}
                    />
                )
                )}
            </div>
        </>
    )
}