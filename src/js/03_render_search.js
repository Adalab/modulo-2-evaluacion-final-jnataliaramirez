// *** Mostrar en pantalla la busqueda de las series
function renderSearch() {
    seriesSection.innerHTML = '';
    let favClass = '';

    // * Un for para cojer cada uno de los elementos del array como uno solo
    for (const dataShow of dataShows) {

        // * Variable que muestra el objeto de la info de la serie
        let dataImage = dataShow.image;
        let dataId = dataShow.id;
        let newContentGenres; // * --> Entrevista
   

        // * Crear elementos html a js
        const newArticleItemEl = document.createElement('article');
        const newImgItemEl = document.createElement('img');
        const newh3ItemEl = document.createElement('h3');
        const newPItemEl = document.createElement('p') // * --> Entrevista

        // * Ejecuta isFavourite() para saber si el elemento esta en favoritos
        // * true or false
        const isNewArticleFav = isFavourite(dataShow);

        // * Comprobar si hay elementos fav (true), para agregar la clase fav 
        if (isNewArticleFav) {
            favClass = 'series__card--fav';
            newArticleItemEl.classList.add(`${favClass}`);
        } else {
            favClass = '';
        }

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

        // * Añadir contenido: Genero de la serie --> Entrevista
        for (const dataGenre of dataShow.genres) {
            newContentGenres = document.createTextNode(`${dataGenre}`);
            newPItemEl.appendChild(newContentGenres);
            newArticleItemEl.appendChild(newPItemEl);
        }

        // * Añadir <article> a <section> de la pág. HTML
        seriesSection.appendChild(newArticleItemEl);
    }

    listenerFav();
}
