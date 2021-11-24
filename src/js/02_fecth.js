// *** Recoger input de la usuaria y hacer petición al servidor

// ** Hacer petición al fetch cuando cargue la pág.para traer los 1º resultados

fetch(`https://api.tvmaze.com/shows?page=1`)
  .then((response) => response.json())
  .then((data) => {
    // * Devuelve solo 18 elementos del array.
    let newData = data.slice(-18);

    // * Tomar la info de newData para añadir en un nuevo array dataShows
    const addDataShows = newData.map((aData) => dataShows.push(aData));

    // * Pintar en pantalla los datos recibidos por el servidor
    renderSearch();

    // * Guardar los datos que ha dado el servidor en localStorage
    setInLocalStorage();
  });

// **Petición cuando se solicite buscar una serie

// * Funcion manejadora
function handlerSearch(event) {
  let valueInput = searchInput.value;

  // *** Hacer petición al servidor - Fetch
  fetch(`https://api.tvmaze.com/search/shows?q=${valueInput}`)
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
