'use strict';

// *** Variables del mundo html a js
const seriesSection = document.querySelector('.js_series_section');
const searchInput = document.querySelector('.js_search_input');
const submit = document.querySelector('.js_button');

// *** Variables globales
// let dataSeries = [];
const dataShows = [];


// *** Recoger input de la usuaria y hacer petición al servidor

// * Funcion manejadora
function handlerSearch(event) {

    let valueInput =  searchInput.value;

    // *** Hacer petición al servidor - Fetch
    fetch (`http://api.tvmaze.com/search/shows?q=${valueInput}`)
    .then((response) => response.json())
    .then((data) => {

        // * Tomar la info de data.show para añadir en un nuevo array dataShows**
        for (const eachEl of data) {
            let eachShow = eachEl.show;
            dataShows.push(eachShow);
        }

        // dataSeries = data;
        renderSearch();
    });

    event.preventDefault();
}

// * Listener
submit.addEventListener('click', handlerSearch);


// *** Mostrar en pantalla la busqueda de las series
function renderSearch() {
    seriesSection.innerHTML = '';



    // * Un for para cojer cada uno de los elementos del array como uno solo
    for (const dataShow of dataShows) {

        // * Variable que muestra el objeto de la info de la serie
        let dataImage = dataShow.image;
        let dataId = dataShow.id;

        // * Crear elementos html a js
        const newArticleItemEl = document.createElement('article');
        const newImgItemEl = document.createElement('img');
        const newh3ItemEl = document.createElement('h3');

        // * Configuracion de los elementos
        newArticleItemEl.classList.add('series__card');
        newArticleItemEl.classList.add('js_series_card');
        newImgItemEl.classList.add('js_img_serie');
        newImgItemEl.classList.add('series__img');
        newh3ItemEl.classList.add('js_name_serie');
        newh3ItemEl.classList.add('series__title');

        // * Configuración de la card
        newArticleItemEl.id = `${dataId}`

        // * Configuración de la imagen
        const imageNull = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
        if (dataImage === null) {
            newImgItemEl.src = `${imageNull}`;
        } else {
            let dataImgContent = dataImage.medium;
            newImgItemEl.src = `${dataImgContent}`;
        }

        // * Añadir contenido: Titulo de la serie
        let newContentTitle = document.createTextNode(`${dataShow.name}`);
        newh3ItemEl.appendChild(newContentTitle);

        // * Añadir <img> y <h3> a <article>
        newArticleItemEl.appendChild(newImgItemEl);
        newArticleItemEl.appendChild(newh3ItemEl);

        // * Añadir <article> a <section> de la pág. HTML
        seriesSection.appendChild(newArticleItemEl);
    }

    listenerFav();

}


// *** Click de la usuaria sobre la card

// * Variable global de favoritos 
let dataFavourites = [];

// * Funcion manejadora
function handlerFav(event) {
    // * Accede al id del elemento clickado
    let clickCard = parseInt(event.currentTarget.id);

    // * Encontrar en el array dataShows la misma info al elemento que ha sido clickado
    const findId = dataShows.find(dataShow =>
        dataShow.id === clickCard);
    
    // ** Buscar que el fav seleccionado no este en el array de fav., para evitar duplicar contenido
    // * Encontrar posición del elemento clickado: si es -1 no esta en el arrray dataFavourites
    const favouriteFound = dataFavourites.findIndex(dataFavorite =>
        clickCard === dataFavorite.id );
    
    // * Añadir el elemento clickado si no esta en el array
    if (favouriteFound === -1) {
        // * Añadir al array dataFavourites la info del elemento clickado  
        dataFavourites.push(findId);
    } else {
        // * Quitar elemento si la usuaria vuelve a dar click sobre el (quitar fav.)
        dataFavourites.splice(favouriteFound, 1);
    }

}

// * Funcion Listener
function listenerFav () {
    // * Variable que trae todos los elementos (cards) encontrados
    const cardsList = document.querySelectorAll('.js_series_card');

    // * Escucho el evento sobre cada elemento (card)
    for (const favouriteEl of cardsList ) {
        favouriteEl.addEventListener('click', handlerFav);
}}




