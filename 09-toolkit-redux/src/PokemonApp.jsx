import { useEffect } from "react"

import { useDispatch, useSelector } from 'react-redux'

import { getPokemons } from './store/slices/pokemon'

export const PokemonApp = () => {

    const { pokemons = [], isLoading, page } = useSelector(state => state.pokemons);

    const dispatch = useDispatch();

    const onNextPage = () => {
        dispatch(getPokemons(page));

    }

    useEffect(() => {
        dispatch(getPokemons())

    }, [])


    return (
        <>
            <h1>Pokemon App</h1>
            <hr />

            <span>Loading ... {isLoading ? 'True' : 'False'}</span>

            <ul>
                {pokemons.map(pokemon => (
                    (<li key={pokemon.name}>{pokemon.name}: {pokemon.url}</li>)

                ))}
            </ul>

            <button
                disabled={isLoading}
                onClick={(onNextPage)}
            >
                Next
            </button>

        </>
    )
}
