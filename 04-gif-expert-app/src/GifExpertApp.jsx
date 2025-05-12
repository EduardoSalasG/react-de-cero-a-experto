import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

function GifExpertApp() {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
        // categories.push(newCategory);
        // console.log(category)
    }

    const category = ''

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            ></AddCategory>

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }
        </>
    )
}

export default GifExpertApp