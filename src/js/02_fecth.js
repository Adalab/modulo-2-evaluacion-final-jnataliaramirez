// *** Recoger input de la usuaria y hacer petición al servidor

// * Funcion manejadora
function handlerSearch(event) {
    let valueInput = searchInput.value;

    // *** Hacer petición al servidor - Fetch
    fetch(`http://api.tvmaze.com/search/shows?q=${valueInput}`)
        .then((response) => response.json())
        .then((data) => {

            // * Este arreglo esta vacio para cuando se vuelva hacer un fetch la ventana se vacie
            dataShows = [];

            // * Tomar la info de data.show para añadir en un nuevo array dataShows**
            for (const eachEl of data) {
                let eachShow = eachEl.show;
                dataShows.push(eachShow);
            }

            // * Pintar en pantalla los datos recibidos por el servidor
            renderSearch();

            // * Guardar los datos que ha dado el servidor en localStorage
            setInLocalStorage();

        });

    event.preventDefault();
}

// * Listener
submit.addEventListener('click', handlerSearch);
