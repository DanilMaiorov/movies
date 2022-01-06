import getData from './getData';
import renderMovies from './renderMovies';

const module_1 = () => {
    getData().then((data) => {
        renderMovies(data)
    })
}

export default module_1