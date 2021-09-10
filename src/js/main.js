'use strict';

// *** Variables del mundo html a js 
const seriesSection = document.querySelector('.js_series_section');
const searchInput = document.querySelector('.js_search_input');
const submit = document.querySelector('.js_button');

// *** Variables globales
let dataSeries = [];


// *** Hacer petición al servidor - Fetch
fetch (`http://api.tvmaze.com/search/shows?q=game`) 
    .then((response) => response.json())
    .then((data) => {
        dataSeries = data;
        renderSearch();
    });

// *** Mostrar en pantalla la busqueda de las series
function renderSearch() {
    
    // * Un for para cojer cada uno de los elementos del array como uno solo
    for (const dataSerie of dataSeries) {

        // * Variable que muestra el objeto de la info de la serie 
        let dataShow = dataSerie.show
        let dataImage = dataShow.image;

        // * Crear elementos html a js
        const newArticleItemEl = document.createElement('article');
        const newImgItemEl = document.createElement('img');
        const newh3ItemEl = document.createElement('h3');

        // * Configuracion de los elementos
        newArticleItemEl.classList.add('series__card');
        newImgItemEl.classList.add('js_img_serie');
        newImgItemEl.classList.add('series__img');
        newh3ItemEl.classList.add('js_name_serie');
        newh3ItemEl.classList.add('series__title');

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
}

// *** Recoger input de la usuaria




