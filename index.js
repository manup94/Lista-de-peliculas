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

/// DEL FORMULARIO DE AÑADIR MOVIE/////////////
let form = document.querySelector('.add-movie-form');
let section = document.querySelector('#add-movie');
let addTitle = document.querySelector('#add-title');
let addLink = document.querySelector('#add-link');
let addimg = document.querySelector('#add-img');
let addYear = document.querySelector('#add-year');
let addStarring = document.querySelector('#add-starring');
let addDirectedBy = document.querySelector('#add-directed-by');
let addButton = document.querySelector('#submit-button')
 




///////FUNCIONES///////////////////
/////////CREAR LISTADO DE PELICULAS///////
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

function addMovieList() {

    movies.forEach(movie => {
        addData(movie);
        createMovie()
    });
}

///////////////AÑADIR NUEVA PELICULA////////////

function openAddMovie() {
    section.classList.toggle('add-movie');
    
}

function submitForm() {
    
    arrayPush();
    movieListContainer.innerHTML = '';
    addMovieList();
    form.reset();
}

function arrayPush() {
    movies.push({
            id: movies.length + 1 ,
             title: addTitle.value ,
             url: addLink.value ,
             img: addimg.value ,
             year: addYear.value ,
             starring: addStarring.value ,
             directedBy: addDirectedBy.value
        
         })
}

///////////////// BUSCAR PELICULA/////////////////







function search() {
   movies.forEach(movie => {
    if (searchBar.value == movie.title.toLowerCase() ) {
        console.log('encontrado');
        movieListContainer.innerHTML = '';
        addData(movie);
        createMovie()
    } else if (!searchBar.value){
        movieListContainer.innerHTML = '';
        addMovieList();
    }
    
   }); 





}



///////////////EVENTOSS////////////////////////
addMovieButton.addEventListener('click',openAddMovie);
addButton.addEventListener('click',submitForm);
searchBarButton.addEventListener('click',search);



addMovieList(movies);


