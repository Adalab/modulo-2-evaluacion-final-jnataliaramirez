
// *** Click de la usuaria sobre la card para añadir fav

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
        clickCard === parseInt(dataFavorite.id) );
    
    // * Añadir el elemento clickado si no esta en el array
    if (favouriteFound === -1) {
        // * Añadir al array dataFavourites la info del elemento clickado  
        dataFavourites.push(findId);
    } else {
        // * Quitar elemento si la usuaria vuelve a dar click sobre el (quitar fav.)
        dataFavourites.splice(favouriteFound, 1);
    }

    renderSearch();
    favouriteSection.innerHTML = '';
    renderFav();
    setInLocalStorage();

}

// * Funcion Listener para las cards que se quieran seleccionar como fav.
function listenerFav () {
    // * Variable que trae todos los elementos (cards) encontrados
    const cardsList = document.querySelectorAll('.js_series_card');
    // * Escucho el evento sobre cada elemento (card)
    for (const favouriteEl of cardsList ) {
        favouriteEl.addEventListener('click', handlerFav);
    } 
}

// * Función listener para quitar los fav. del listado de "Mis series fav."
function listenerItemFav() {
    // * Variable que trae todos los fav.
    const favsList = document.querySelectorAll('.js_favourite');
    // * Escucho el evento sobre cada fav
    for (const favEl of favsList ) {
        favEl.addEventListener('click', handlerFav);
    }
}

// *** Comprobar si hay elementos favoritos 
function isFavourite(dataShow) {
    // * Encontrar si en dataFavourites hay elementos de dataShow 
    const favFound = dataFavourites.find(dataFav => 
        dataFav.id === dataShow.id);
        
    // * Si no hay elementos devolvera undefined y la función será 
    // * false y si tiene fav. devolvera true
    if (favFound === undefined) {
        return false;
    } else {
        return true;
    }

}