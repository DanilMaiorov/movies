const renderList = (movies) => { //функция для отрисовки списка
    let movieArr = []
    let newMovieArr = []
    const selector = document.querySelector('#select-movie')
    const arrayUnique = (arr) => { //функция для исключения повторяющихся значений в массиве
        return arr.filter((e, i, a) => a.indexOf(e) == i);
    };
    movies.forEach(item => {
        if(item.movies != null) {  //делаю проверку на исключение пустых массивов
            movieArr.push(item.movies) //пушу все в новый массив
        }
    })//сейчас нужно перебрать массив и создать на перебранной основе выпадающий список
        let arrUn = arrayUnique(movieArr.join().split(',')).forEach((element, index) => {//соберем весь массив в один и разделим запятой
            const option = document.createElement('option')
            option.innerHTML = `
            <option value=${index}>${element}</option>`
            selector.append(option) 
        })
    selector.addEventListener('change', (e) => { //вешаю обработчик события на изменение при выборе селекта
        const cards = document.querySelectorAll('.card') //перебираю массив карточек ИЗ ВНОВЬ СОЗДАННЫХ В НОВЫМ КЛАССОМ
        const movies = document.querySelectorAll('.name') //перебираю массив с фильмами 
        console.log(e.target.value)
        movies.forEach(item => {
            const {movies} = item
            if(item.movies != null) {  //делаю проверку на исключение пустых массивов
                movieArr.push(item.movies) //пушу все в новый массив
            }
        })
            let arrUn = arrayUnique(movieArr.join().split(',')).forEach(item => {
                newMovieArr.push(item)
            })
            let newArrr = newMovieArr.splice(0, 24)
            console.log(typeof newArrr[0])
            cards.forEach((element, index) => { //перебираю массив по элементу и индексу
                element.style.display = 'none'
            if (newArrr[index] == e.target.value) { //условие на сокрытие карточек, не сподходящих под название фильма
                //debugger
                element.style.display = 'block';
            } 
        })  

        
    })    
     
};
export default renderList