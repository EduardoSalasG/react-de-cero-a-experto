export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=NnwpwfXGxXt0xqt3225yVs6xNkXP2v0S&q=${category}&limit=10`

    const resp = await fetch(url);

    const { data } = await resp.json()

    const gifs = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    ))
    return gifs;
}