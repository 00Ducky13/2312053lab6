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
    // Import the cars.json file
    //const cars = require('../../cars.json');

    // Check if the request method is GET and the route is /cars
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
        // Read the cars.json file
        const carsFilePath = path.resolve(__dirname, '../cars.json');
        const carsData = fs.readFileSync(carsFilePath, 'utf8');
        const cars = JSON.parse(carsData);

        // Set the response status code to 200 (OK) and return the cars data
        context.res = {
            status: 200,
            body: cars
        };
    } catch (error) {
        // If an error occurs, return a 500 (Internal Server Error) response with the error message
        context.res = {
            status: 500,
            body: error.message
        };
    }
};