// *** Mostrar en pantalla los favoritos, en su sección 
function renderFav() {
    
    for (const dataFavourite of dataFavourites) {
        
        // * Variable que muestra el objeto de la info de la serie
        let dataImage = dataFavourite.image;
        let dataId = dataFavourite.id;

        // * Crear elementos html a js
        const newLiItemEl = document.createElement('li');
        const newH3FavItemEl = document.createElement('h3');
        const newImgFavItemEl = document.createElement('img');
        const newSpamItemEl = document.createElement('span');

        // * Configuracion de los elementos
        newLiItemEl.classList.add('favourite__li');
        newLiItemEl.classList.add('js_favourite');
        newH3FavItemEl.classList.add('favourite__name');
        newImgFavItemEl.classList.add('favourite__img');
        newSpamItemEl.classList.add('favourite__close');

        // * Configución del li 
        newLiItemEl.id = `${dataId}`;

        // * Configuración de la imagen
        const imageNull = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
        if (dataImage === null) {
            newImgFavItemEl.src = `${imageNull}`;
        } else {
            let dataImgContent = dataImage.medium;
            newImgFavItemEl.src = `${dataImgContent}`;
        }

        // * Añadir contenido: Titulo de la serie
        let newContentTitle = document.createTextNode(`${dataFavourite.name}`);
        newH3FavItemEl.appendChild(newContentTitle);

        // * Añadir contenido: span
        let newContentSpan = document.createTextNode('x');
        newSpamItemEl.appendChild(newContentSpan);

        // * Añadir <h3>, <img> y <span> al <ul>
        newLiItemEl.appendChild(newH3FavItemEl);
        newLiItemEl.appendChild(newImgFavItemEl);
        newLiItemEl.appendChild(newSpamItemEl);

        // * Añadir <li> al <ul> de la pág. HTML
        favouriteSection.appendChild(newLiItemEl);

    }

    listenerItemFav();
}
