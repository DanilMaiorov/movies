    let cartArr = []
    let movieArr = []
    const movieCart = document.querySelector('.movie-card') //ищем созданную карточку
    const selector = document.querySelector('#select-movie')

    const renderMovies = (movies) => {

    movies.forEach((movieItem) => { //перебираю весь массив данных
        const {name, photo, movies} = movieItem //делаю деструктуризацию
        const card = document.createElement('div'); //создаю новый элемент для каждой новой карточки
        card.classList.add('card');
        card.style.cssText = `
        height: 520px;
        width: 250px;
        background-color: rgba(212, 177, 250, 0.4);
        border-radius: 15px;
        margin-left: 10px;
        margin-rigth: 10px;
        margin-bottom: 10px;
        `
        //ниже создаю верстку на карточку каждого фильма
        card.innerHTML = ` 
        <div class="movie-card">
            <h3 class="actor">${name}</h3>
            <div class="poster">
                <img src=${photo} alt="">
            </div>
            <div class="movie-name">
                <div class="name">${movies}</div>
            </div>
        </div>` 
        if(movies != null) {  //делаю проверку на исключение пустых массивов
            movieArr.push(movies) //пушу все в новый массив
            localStorage.setItem('movies', JSON.stringify(movieArr)) //сохраняю данные в локалсторэдж
        }
        cartArr.push(movieItem)
        movieCart.append(card) 
    });

    selector.addEventListener('change', (e) => { //вешаю обработчик события на изменение при выборе селекта
        const cards = document.querySelectorAll('.card') //перебираю массив карточек ИЗ ВНОВЬ СОЗДАННЫХ В НОВЫМ КЛАССОМ
        const movies = document.querySelectorAll('.name') //перебираю массив с фильмами
        const str = e.target.value 
        cards.forEach((element, index) => { //перебираю массив по элементу и индексу
            element.style.display = 'none'
            if (movies[index].textContent.includes(str)) { //условие на сокрытие карточек, не сподходящих под название фильма
                element.style.display = 'block';
            } 
        })
    })

    const arrayUnique = (arr) => { //функция для исключения повторяющихся значений в массиве
        return arr.filter((e, i, a) => a.indexOf(e) == i);
    };

    const renderList = () => { //функция для отрисовки списка
        const arr = JSON.parse(localStorage.getItem('movies')) //получим из локалсторэдж наш массив данных по ключу
        let arrUn = arrayUnique(arr.join().split(',')) //соберем весь массив в один и разделим запятой
        //console.log(arrUn)
        //сейчас нужно перебрать массив и создать на перебранной основе выпадающий список
        arrUn.forEach((element, index) => {
            const option = document.createElement('option')
            option.innerHTML = `
            <option value=${index}>${element}</option>`
            selector.append(option)
        })
    };
    renderList();
} 

export default renderMovies