const fs = require('fs');
const path = require('path');

/*module.exports = async function (context, req) {
    try {
        const carsFilePath = path.resolve(__dirname, '../cars.json');
        const carsData = fs.readFileSync(carsFilePath, 'utf8');
        let cars = JSON.parse(carsData);
        const carid = req.params.id;
        const index = cars.findIndex(car => car.id == carid);
        cars.splice(index, 1);
        fs.writeFileSync(carsFilePath, JSON.stringify(cars, null, 2), 'utf8');
        context.res = {
            status: 200,
            body: { message: `Car with id ${carId} removed successfully` }
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: error.message
        };
    }
};*/

module.exports = async function (context, req) {
    try {
        const carsFilePath = path.resolve(__dirname, '../cars.json');
        const carsData = fs.readFileSync(carsFilePath, 'utf8');
        let cars = JSON.parse(carsData);
        let carId = req.body.id;
        const index = cars.findIndex(car => car.id == carId);
        cars.splice(index, 1);
        fs.writeFileSync(carsFilePath, JSON.stringify(cars, null, 2), 'utf8');
        context.res = {
            status: 200,
            body: { message: `Car with id ${carId} removed successfully` }
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: error.message
        };
    }
};