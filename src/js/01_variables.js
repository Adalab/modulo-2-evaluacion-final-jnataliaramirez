'use strict';

// *** Variables del mundo html a js
const seriesSection = document.querySelector('.js_series_section');
const searchInput = document.querySelector('.js_search_input');
const submit = document.querySelector('.js_button');
const favouriteSection = document.querySelector('.js_favourite_section');

// *** Variables globales
let dataShows = [];
let dataFavourites = [];