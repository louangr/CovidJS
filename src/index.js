import { fetchAndStoreCountriesData } from './model.js'

const initialyze = () => {
    // TO DO: renderLoader()
    fetchAndStoreCountriesData()
    // TO DO: removeLoader()
    // TO DO: renderData()
}

window.addEventListener("DOMContentLoaded", initialyze)