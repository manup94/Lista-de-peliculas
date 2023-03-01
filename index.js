///////SELECTORES///////////////////////
//  DEL HEADER////////////
const addMovieButton = document.querySelector('.add-button');
let searchBar = document.querySelector('.input-search');
const searchBarButton = document.querySelector('.search-button');
// DE LA LISTA DE MOVIES////////////
let movieListContainer = document.querySelector('.movies-list');
const template = document.querySelector('template');
const movieContainer = template.content.querySelector('.movie-container');
let titleContainer = movieContainer.querySelector('.title-container');
let title = titleContainer.querySelector('.title')
let id = titleContainer.querySelector('.id');
let link = movieContainer.querySelector('.link');
let img = movieContainer.querySelector('.img');
let year = movieContainer.querySelector('.year');
let starring = movieContainer.querySelector('.starring');
let directedBy = movieContainer.querySelector('.directed-by');








///////FUNCIONES///////////////////

function createMovie() {
   
        const clone = template.content.cloneNode(true);
        movieListContainer.append(clone);

    };
  
   

function addData(movie) {

        title.textContent = movie.title;
        id.textContent = movie.id;
        link.href = movie.url;
        img.src = movie.img;
        year.textContent = movie.year;
        starring.textContent = movie.starring;
        directedBy.textContent = movie.directedBy;
   
}

function addMovieList(movies) {

    movies.forEach(movie => {
        createMovie()
        addData(movie);

    });
}


addMovieList(movies);
