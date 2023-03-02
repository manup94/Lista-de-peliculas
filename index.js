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
    
    movies.push({
        id: movies.length + 1 ,
        title: addTitle.value ,
        url: addLink.value ,
        img: addimg.value ,
        year: addYear.value ,
        starring: addStarring.value ,
        directedBy: addDirectedBy.value
    
    })
    
    createNewMovie()
    addLastMovie(movies);
    
    console.log(movies);
    

    
   
   
    
}

function createNewMovie() {
    let newMovieContainer = document.createElement('div');
    let title = document.createElement('h3');
    let id = document.createElement('span');
    let link = document.createElement('a');
    let img = document.createElement('img');
    let year = document.createElement('p');
    let starring = document.createElement('p');
    let directedBy = document.createElement('p');

    newMovieContainer.append(title,link,img,year,starring,directedBy);
    title.append(id);
    movieListContainer.append(movieContainer);

}


function addLastMovie(movies) {
   
    movies.forEach(movie => {
        if (movie.id < movies.length + 1) {
           
            console.log('hola');
            title.textContent = movie.title;
            id.textContent = movies.length ;
            link.href = movie.url;
            img.src = movie.img;
            year.textContent = movie.year;
            starring.textContent = movie.starring;
            directedBy.textContent = movie.directedBy;
            
            
        }   
    });
    


}






///////////////EVENTOSS////////////////////////
addMovieButton.addEventListener('click',openAddMovie);
addButton.addEventListener('click',submitForm);




addMovieList(movies);


