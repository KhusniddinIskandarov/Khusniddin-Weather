const KEY = '5a6fde5a064d76fcdf5f9efba498126e'

const getData = async (city) => {
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&units=metric&appid=${KEY}`
    loader(true)
    const req = await fetch(base + query)
    const data = await req.json()
    loader(false)

    return data
}

