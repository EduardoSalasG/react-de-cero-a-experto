export const GifItem = ({ title, url, id }) => {

    if (!title) {
        title = 'Titulo por defecto'
    }

    if (!url) {
        url = 'https://media2.giphy.com/media/mxXPuScIwPwK2oyD6i/giphy.gif?cid=77735f64p8247wq9qs819vbevxuiud5p9o82gal35nk3ojf1&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    }


    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>

        </div>
    )
}