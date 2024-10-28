const apiKey = import.meta.env.VITE_API_KEY as string

export const fetchMovies = async () => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=movie&page=1`)
    const data = await response.json()
    const response2 = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=movie&page=2`)
    const data2 = await response2.json()
    return [...data.Search, ...data2.Search]
}

export const fetchStream = async () => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=stream&page=1`)
    const data = await response.json()
    const response2 = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=stream&page=2`)
    const data2 = await response2.json()
    return [...data.Search, ...data2.Search]
}

export const fetchEvents = async () => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=events&page=1`)
    const data = await response.json()
    const response2 = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=events&page=2`)
    const data2 = await response2.json()
    return [...data.Search, ...data2.Search]
}
