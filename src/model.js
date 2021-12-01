import Resources from "./resources.js"

let countriesData = []

const waysToSortCountriesData = {
    positiveCases: "positiveCases",
    death: "death",
    PIBByResidents: "PIBByResidents"
}

const sortAndGetCountriesData = (countriesNumber = 10, wayToSortCountriesData) => {
    // TO DO: return sorted data
}

const fetchAndStoreCountriesData = async () => {
    await fetchAndStoreCovidData() // 'await' is present here to be sure the 'countriesData' is filled when 'countriesData.findIndex(' is done
    fetchAndStorePIBData()

    console.log("countriesData", countriesData)
}

const fetchAndStoreCovidData = async () => {
    const covidData = await (await fetch('https://api.covid19api.com/summary')).json()

    await countriesData.push(covidData.Countries.map(c => { // 'await' is present here to be sure the 'countriesData' is filled when 'countriesData.flat()' is done
        return { country: c.Country, countryCodeAlpha2: c.CountryCode, countryCodeAlpha3: Resources.isoCountryCode[c.CountryCode].countryCodeAlpha3, totalConfirmed: c.TotalConfirmed, totalDeaths: c.TotalDeaths, flagURL: `https://flagcdn.com/56x42/${c.CountryCode.toLowerCase()}.png`, PIBByResidents: null }
    }))

    countriesData = countriesData.flat()
}

const fetchAndStorePIBData = async () => {
    const PIBData = await (await fetch(`https://stats.oecd.org/SDMX-JSON/data/SNA_TABLE1/${Object.values(Resources.isoCountryCode).filter(c => c.hasPIBValue).map(c => c.countryCodeAlpha3).join("+")}.B1_GE.HCPC/all?startTime=2019&endTime=2019&dimensionAtObservation=allDimensions`)).json()
    const PIBValues = PIBData.dataSets[0].observations

    PIBData.structure.dimensions.observation[0].values.forEach((c, i) => {
        const countryIndex = countriesData.findIndex(country => country.countryCodeAlpha3 === c.id)
        countriesData[countryIndex].PIBByResidents = PIBValues[`${i}:0:0:0`][0]
    })
}

export {
    fetchAndStoreCountriesData
}