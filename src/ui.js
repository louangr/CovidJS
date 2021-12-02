import { sortAndGetCountriesData } from './model.js'

const renderCounrtiesDataGrid = (countriesData) => {
    const dataGrid = document.getElementById("data-grid")
    dataGrid.innerHTML = ""

    const countriesTitleGrid = document.createElement("p")
    countriesTitleGrid.className = "grid-header-label"
    countriesTitleGrid.textContent = "Countries"

    const positiveCasesTitleGrid = document.createElement("p")
    positiveCasesTitleGrid.className = "grid-header-label"
    positiveCasesTitleGrid.textContent = "Positive Cases"
    
    const deathsTitleGrid = document.createElement("p")
    deathsTitleGrid.className = "grid-header-label"
    deathsTitleGrid.textContent = "Deaths"

    const PIBByResidentTitleGrid = document.createElement("p")
    PIBByResidentTitleGrid.className = "grid-header-label"
    PIBByResidentTitleGrid.textContent = "GDP / capita"

    dataGrid.appendChild(countriesTitleGrid)
    dataGrid.appendChild(positiveCasesTitleGrid)
    dataGrid.appendChild(deathsTitleGrid)
    dataGrid.appendChild(PIBByResidentTitleGrid)

    countriesData.forEach(c => {
        const countryFlag = document.createElement("img")
        countryFlag.width = 39
        countryFlag.loading = "lazy"
        countryFlag.src = c.flagURL

        const countryName = document.createElement("p")
        countryName.className = "grid-item-label-country"
        countryName.textContent = c.country

        const countryContainer = document.createElement("div")
        countryContainer.className = "country-container"
        countryContainer.appendChild(countryFlag)
        countryContainer.appendChild(countryName)

        const positiveCasesValue = document.createElement("p")
        positiveCasesValue.className = "grid-item-label"
        positiveCasesValue.textContent = c.totalConfirmed
        
        const deathsValue = document.createElement("p")
        deathsValue.className = "grid-item-label"
        deathsValue.textContent = c.totalDeaths
    
        const PIBByResidentValue = document.createElement("p")
        PIBByResidentValue.className = "grid-item-label"
        PIBByResidentValue.textContent = c.PIBByResidents ?? "N/A"

        dataGrid.appendChild(countryContainer)
        dataGrid.appendChild(positiveCasesValue)
        dataGrid.appendChild(deathsValue)
        dataGrid.appendChild(PIBByResidentValue)

    })
}

const renderCountriesDataFromComboBox = () => {
    const waysToSortCountriesData = document.getElementById("select-ways-to-sort-countries-data")
    const wayToSortCountriesData = waysToSortCountriesData.options[waysToSortCountriesData.selectedIndex].value
    const countriesNumbers = document.getElementById("select-number-of-countries")
    const countriesNumber = countriesNumbers.options[countriesNumbers.selectedIndex].value 
    const countriesData = sortAndGetCountriesData(countriesNumber, wayToSortCountriesData)

    renderCounrtiesDataGrid(countriesData)
    // TO DO : renderCounrtiesDataGraphic()
}

const initialyzeUi = () => {
    renderCountriesDataFromComboBox()

    document.getElementById("select-ways-to-sort-countries-data").addEventListener("change", renderCountriesDataFromComboBox)
    document.getElementById("select-number-of-countries").addEventListener("change", renderCountriesDataFromComboBox)
}

export {
    initialyzeUi
}