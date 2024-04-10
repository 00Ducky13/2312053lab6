const fs = require('fs');
const path = require('path');

module.exports = async function (context, req) {
    try {
        // Read the cars.json file
        const carsFilePath = path.resolve(__dirname, '../cars.json');
        const carsData = fs.readFileSync(carsFilePath, 'utf8');
        let cars = JSON.parse(carsData);
        const newCar = context.req.body
        newCar.id = (cars.length)
        cars.push(newCar)
        fs.writeFileSync(carsFilePath, JSON.stringify(cars, null, 2), 'utf8');
        // Set the response status code to 200 (OK) and return the cars data
        context.res = {
            status: 201,
            body: newCar
        };
    } catch (error) {
        // If an error occurs, return a 500 (Internal Server Error) response with the error message
        context.res = {
            status: 500,
            body: error.message
        };
    }
};