import { sortAndGetCountriesData } from './model.js'
import Resources from './resources.js'

const renderCounrtiesDataGrid = (countriesData) => {
    const dataGrid = document.getElementById("data-grid")
    dataGrid.innerHTML = ""

    const countriesTitleGrid = document.createElement("p")
    countriesTitleGrid.className = "grid-header-label"
    countriesTitleGrid.textContent = Resources.strings.countriesLabel

    const positiveCasesTitleGrid = document.createElement("p")
    positiveCasesTitleGrid.className = "grid-header-label"
    positiveCasesTitleGrid.textContent = Resources.strings.positiveCasesLabel

    const deathsTitleGrid = document.createElement("p")
    deathsTitleGrid.className = "grid-header-label"
    deathsTitleGrid.textContent = Resources.strings.deathsLabel

    const PIBByResidentTitleGrid = document.createElement("p")
    PIBByResidentTitleGrid.className = "grid-header-label"
    PIBByResidentTitleGrid.textContent = Resources.strings.PIBByResidentLabel

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
        PIBByResidentValue.textContent = c.PIBByResidents ?? Resources.strings.nullValueLabel

        dataGrid.appendChild(countryContainer)
        dataGrid.appendChild(positiveCasesValue)
        dataGrid.appendChild(deathsValue)
        dataGrid.appendChild(PIBByResidentValue)

    })
}

const renderCounrtiesDataGraphic = (countriesData) => {

    const countriesDataTable = [
        ['', `${Resources.strings.PIBByResidentLabel}, ${Resources.strings.positiveCasesLabel}`, { role: 'annotation' }, { role: 'annotationText' }, { role: 'style' }]
    ]

    countriesData.forEach(c => {
        countriesDataTable.push([c.PIBByResidents, c.totalConfirmed, c.countryCodeAlpha3, c.country, "point {size: 5; fill-color: #A9A9A9"])
    })

    google.charts.load('current', {
        callback: () => {
            const data = google.visualization.arrayToDataTable(countriesDataTable)

            const options = {
                width: "100%",
                height: "100%",
                hAxis: {
                    title: Resources.strings.PIBByResidentLabel
                },
                vAxis: {
                    title: Resources.strings.positiveCasesLabel
                },
                legend: 'none',
                annotations: {
                    textStyle: {
                        fontName: 'Open Sans',
                        fontSize: 14,
                        bold: true,
                        color: '#949494',
                        opacity: 0.5
                    }
                }
            }

            const chart = new google.visualization.ScatterChart(document.getElementById('scatter-chart'))
            chart.draw(data, options)
        },
        packages: ['corechart']
    })
}

const renderCountriesDataFromComboBox = () => {
    const waysToSortCountriesData = document.getElementById("select-ways-to-sort-countries-data")
    const wayToSortCountriesData = waysToSortCountriesData.options[waysToSortCountriesData.selectedIndex].value
    const countriesNumbers = document.getElementById("select-number-of-countries")
    const countriesNumber = countriesNumbers.options[countriesNumbers.selectedIndex].value
    const countriesData = sortAndGetCountriesData(countriesNumber, wayToSortCountriesData)

    renderCounrtiesDataGrid(countriesData)
    renderCounrtiesDataGraphic(countriesData)
}

const initialyzeUi = () => {
    renderCountriesDataFromComboBox()

    document.getElementById("select-ways-to-sort-countries-data").addEventListener("change", renderCountriesDataFromComboBox)
    document.getElementById("select-number-of-countries").addEventListener("change", renderCountriesDataFromComboBox)
}

export {
    initialyzeUi
}