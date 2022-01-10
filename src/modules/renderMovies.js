    let cartArr = []
    let movieArr = []
    const movieCart = document.querySelector('.movie-card') //ищем созданную карточку
    const selector = document.querySelector('#select-movie')

    const renderMovies = (movies) => {

    movies.forEach((movieItem) => { //перебираю весь массив данных
        //console.log(movieItem)
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
/*         if(movies != null) {  //делаю проверку на исключение пустых массивов
            movieArr.push(movies) //пушу все в новый массив
            localStorage.setItem('movies', JSON.stringify(movieArr)) //сохраняю данные в локалсторэдж
        } */
        //cartArr.push(movieItem)
        movieCart.append(card) 
    });

     

   

}

export default renderMovies