import { fetchAndStoreCountriesData, sortAndGetCountriesData, waysToSortCountriesData } from '../src/model'

beforeAll(() => {
  return fetchAndStoreCountriesData()
})

test("test example", () => {
  // ARRANGE
  // je met en place l'environnement du test
  // je positionne le système dans un état déterminé
  
  // ACT
  // je fais un truc et un seul avec le système
  
  // ASSERT
  // je vérifie que le système est dans l'état attendu
  // je vérifie que la valeur de retour est celle attendue
  expect(true).toBe(true)
})

describe("sorting of data", () => {
  test("by default it is sorted by positiveCasesDescending", () => {
    const countriesData = sortAndGetCountriesData()

    let isSortingRespected = true
    for (let i = 0; i < 9; i++) {
      isSortingRespected = countriesData[i].totalConfirmed >= countriesData[i + 1].totalConfirmed
      if (!isSortingRespected) {
        break
      }
    }

    expect(isSortingRespected).toBe(true)
  })

  test("test the positiveCasesAscending sorting", () => {
    const countriesData = sortAndGetCountriesData(10, waysToSortCountriesData.positiveCasesAscending)

    let isSortingRespected = true
    for (let i = 0; i < 9; i++) {
      isSortingRespected = countriesData[i].totalConfirmed <= countriesData[i + 1].totalConfirmed
      if (!isSortingRespected) {
        break
      }
    }

    expect(isSortingRespected).toBe(true)
  })

  test("test the deathsDescending sorting", () => {
    const countriesData = sortAndGetCountriesData(10, waysToSortCountriesData.deathsDescending)

    let isSortingRespected = true
    for (let i = 0; i < 9; i++) {
      isSortingRespected = countriesData[i].totalDeaths >= countriesData[i + 1].totalDeaths
      if (!isSortingRespected) {
        break
      }
    }

    expect(isSortingRespected).toBe(true)
  })

  test("test the deathsAscending sorting", () => {
    const countriesData = sortAndGetCountriesData(10, waysToSortCountriesData.deathsAscending)

    let isSortingRespected = true
    for (let i = 0; i < 9; i++) {
      isSortingRespected = countriesData[i].totalDeaths <= countriesData[i + 1].totalDeaths
      if (!isSortingRespected) {
        break
      }
    }

    expect(isSortingRespected).toBe(true)
  })

  test("test the PIBByResidentDescending sorting", () => {
    const countriesData = sortAndGetCountriesData(10, waysToSortCountriesData.PIBByResidentDescending)

    let isSortingRespected = true
    for (let i = 0; i < 9; i++) {
      isSortingRespected = countriesData[i].PIBByResidents >= countriesData[i + 1].PIBByResidents
      if (!isSortingRespected) {
        break
      }
    }

    expect(isSortingRespected).toBe(true)
  })

  test("test the PIBByResidentAscending sorting", () => {
    const countriesData = sortAndGetCountriesData(10, waysToSortCountriesData.PIBByResidentAscending)

    let isSortingRespected = true
    for (let i = 0; i < 9; i++) {
      isSortingRespected = countriesData[i].PIBByResidents <= countriesData[i + 1].PIBByResidents
      if (!isSortingRespected) {
        break
      }
    }

    expect(isSortingRespected).toBe(true)
  })

})

describe("number of data", () => {
  test("by default there are 10 elements", () => {
    const countriesData = sortAndGetCountriesData()
    expect(countriesData.length === 10).toBe(true)
  })

  test("test with 50 elements", () => {
    const countriesData = sortAndGetCountriesData(50)
    expect(countriesData.length === 50).toBe(true)
  })

  test("test with 100 elements", () => {
    const countriesData = sortAndGetCountriesData(100)
    expect(countriesData.length === 100).toBe(true)
  })

  test("test with all elements", () => {
    const countriesData = sortAndGetCountriesData("All")
    expect(countriesData.length > 190).toBe(true)
  })
})