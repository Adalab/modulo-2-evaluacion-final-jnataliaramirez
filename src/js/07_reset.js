// *** Boton de reset para borrar favoritos

// * Funciòn manejadora
function handlerReset() {
    // * Borra todos los datos del array de favoritos
    dataFavourites.splice(0, dataFavourites.length);

    renderSearch();
    favouriteSection.innerHTML = '';
    renderFav();
    setInLocalStorage();
}

// * listener
reset.addEventListener('click', handlerReset)