'use strict';

// * Variables del mundo html a js 
const searchInput = document.querySelector('.js_search_input');
const submit = document.querySelector('.js_button');
const searchSection = document.querySelector('.js_search_section');

// * Variables globales
let dataSeries = [];


// * Hacer petición al servidor - Fetch
fetch (`http://api.tvmaze.com/search/shows?q=girls`) 
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            dataSeries = data[i].show;
            console.log(dataSeries);
            
            renderSearch();
        }
    });

