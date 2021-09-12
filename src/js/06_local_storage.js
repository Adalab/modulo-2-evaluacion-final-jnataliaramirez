// *** Añadir la información de favoritos a local storage
function setInLocalStorage() {
    // * Convertir a string el array de favoritos
    const stringFavourites = JSON.stringify(dataFavourites);

    // * Añadir a local storage los datos converitdos a string
    localStorage.setItem('favourite', stringFavourites);
}

// * Funcion que revisa si hay info en el localStorage para no hacer peticiones al servidor cada vez que carga la pág.
function getLocalStorage() {
    // *  Pedir lo que hay en el localStorage
    const localStorageFav = localStorage.getItem('favourite');

    // * Comprobar que hay datos en localStorage,
    if (localStorageFav !== null) {
        // * sí tengo datos en el local storage, lo convierto de nuevo a JSON para imprimirlo en pantalla
        const arrayFav = JSON.parse(localStorageFav);
        // * Y se guarda en la variable global de favoritos
        dataFavourites = arrayFav;

        // * cada vez que se modifica el arrays de favoritos se vuelve a  pintar y a escuchar eventos
        renderFav();
    } 

}

// * Se carga localStorage cuando carga la pagina para asi mostrar lo que este guardado
getLocalStorage();