import requester from "../utils/requester";

let url = 'http://localhost:3030/data/cars'


function getSixCars() {
    return requester.get(`${url}?pageSize=6`)
}

function getOneCar(carId) {
    return requester.get(`${url}/${carId}`)
}
function getUserCarsOnCurrentPage(countSkip, countCars, userId) {
    return requester.get(`${url}?offset=${countSkip}&pageSize=${countCars}&where=_ownerId like "${userId}"`)
}
function getCountOfUserCars(userId) {
    return requester.get(`${url}?count&where=_ownerId like "${userId}"`)
}

function getCarsOnCurrentPage(countSkip, countCars, filterOptions) {
    let { bodyType, brand, condition, fuelType, gear } = filterOptions

    let arrWithOptions = Object.entries(filterOptions)
        .filter(([key, value]) => value !== 'default')
        .map(([key, value], i) => {
            if (i === 0) {
                return `&where=${key} like "${value}"`
            } else {
                return `AND ${key} like "${value}"` 
            }
        })


    let stringWithOptions = arrWithOptions.join(' ')
    return requester.get(`${url}?offset=${countSkip}&pageSize=${countCars}${stringWithOptions}`)
}

function getCountOfAllCars(filterOptions) {
    let { bodyType, brand, condition, fuelType, gear } = filterOptions

    let arrWithOptions = Object.entries(filterOptions)
        .filter(([key, value]) => value !== 'default')
        .map(([key, value], i) => {
            if (i === 0) {
                return `&where=${key} like "${value}"`
            } else {
                return `AND ${key} like "${value}"`
            }
        })
    let stringWithOptions = arrWithOptions.join(' ')

    return requester.get(`${url}?count${stringWithOptions}`)
}

function createOneCar(carData) {
    return requester.post(url, carData)
}

function editOneCar(carData, carId) {
    return requester.put(`${url}/${carId}`, carData)
}
function deleteOneCar(carId) {
    return requester.remove(`${url}/${carId}`)
}

export default {
    getSixCars,
    getOneCar,
    getCarsOnCurrentPage,
    getCountOfAllCars,
    getUserCarsOnCurrentPage,
    getCountOfUserCars,
    createOneCar,
    editOneCar,
    deleteOneCar,

}