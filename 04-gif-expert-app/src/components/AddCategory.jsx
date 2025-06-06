import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    if (!onNewCategory) {
        throw new Error('onNewCategory is required')
    }

    if (typeof onNewCategory !== 'function') {
        throw new Error('onNewCategory is not a function')
    }

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() < 1) return;
        // setCategories((categories) => [inputValue, ...categories])
        onNewCategory(inputValue.trim())
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}