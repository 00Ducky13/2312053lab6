/*let cars = [
    {
        "make": "Toyota",
        "model": "Camry",
        "year": 2022,
        "price": 250000
    },
    {
        "make": "Honda",
        "model": "Accord",
        "year": 2021,
        "price": 200000
    },
    {
        "make": "Ford",
        "model": "Mustang",
        "year": 2020,
        "price": 300000
    }
]

module.exports = async function (context, req) {
    //const cars = require('../../cars.json');

    console.log(cars)
        context.res = {
            // Set the response status code to 200 (OK)
            status: 200,
            // Set the response body to the cars JSON object
            body: cars
}
};*/

const fs = require('fs');
const path = require('path');

module.exports = async function (context, req) {
    try {
        const carsFilePath = path.resolve(__dirname, '../cars.json');
        const carsData = fs.readFileSync(carsFilePath, 'utf8');
        const cars = JSON.parse(carsData);

        context.res = {
            status: 200,
            body: cars
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: error.message
        };
    }
};