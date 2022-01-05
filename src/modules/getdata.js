

const getData = () => {
    return fetch('dbHeroes.json')
    .then((response) => {
        return response.json()
    })
}

export default getData;