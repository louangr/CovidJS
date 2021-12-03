import Resources from "./resources.js"

let countriesData = []

const waysToSortCountriesData = {
    ascending: "ascending",
    descending: "descending",
    positiveCases: "positiveCases",
    positiveCasesAscending: "positiveCasesAscending",
    positiveCasesDescending: "positiveCasesDescending",
    deaths: "deaths",
    deathsAscending: "deathsAscending",
    deathsDescending: "deathsDescending",
    PIBByResident: "PIBByResident",
    PIBByResidentAscending: "PIBByResidentAscending",
    PIBByResidentDescending: "PIBByResidentDescending"
}

const sortAndGetCountriesData = (countriesNumber = 10, wayToSortCountriesData = waysToSortCountriesData.positiveCasesDescending) => {
    const paramUsedToSort = wayToSortCountriesData.includes(waysToSortCountriesData.deaths)
        ? "totalDeaths"
        : wayToSortCountriesData.includes(waysToSortCountriesData.PIBByResident)
            ? "PIBByResidents"
            : "totalConfirmed"

    countriesNumber === "All" && (countriesNumber = countriesData.length)

    return countriesData.sort((c1, c2) => {
        if (wayToSortCountriesData.toLowerCase().includes(waysToSortCountriesData.ascending)) {
            if (c1[paramUsedToSort] === null) {
                return 1
            } else if (c2[paramUsedToSort] === null) {
                return -1
            }
            return c1[paramUsedToSort] - c2[paramUsedToSort]
        } else {
            if (c1[paramUsedToSort] === null) {
                return 1
            } else if (c2[paramUsedToSort] === null) {
                return -1
            }
            return c2[paramUsedToSort] - c1[paramUsedToSort]
        }
    }).slice(0, countriesNumber)
}

const fetchAndStoreCountriesData = async () => {
    await fetchAndStoreCovidData() // 'await' is present here to be sure the 'countriesData' is filled when 'countriesData.findIndex(' is done
    await fetchAndStorePIBData() // 'await' is present here to be sure the 'countriesData' is filled when UI uses it
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
    fetchAndStoreCountriesData,
    sortAndGetCountriesData,
    waysToSortCountriesData
}