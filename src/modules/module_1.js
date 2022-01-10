import getData from './getData';
import renderMovies from './renderMovies';
import renderList from './renderList'

const module_1 = () => {
    getData().then((data) => {
        console.log(data)
        renderMovies(data)
        renderList(data)
    })
}

export default module_1