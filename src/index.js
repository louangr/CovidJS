import { fetchAndStoreCountriesData } from './model.js'
import { initialyzeUi } from './ui.js'

const initialyze = async () => {
    await fetchAndStoreCountriesData() // 'await' is present here to be sure the 'countriesData' is filled when 'sortAndGetCountriesData(' is done
    initialyzeUi()
}

window.addEventListener("DOMContentLoaded", initialyze)