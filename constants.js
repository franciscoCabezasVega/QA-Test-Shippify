import { faker } from '@faker-js/faker';

const date = new Date();

export const successAddVehicle = "Vehicle added";
export const successDeletedVehicle = "Vehicle deleted";
export const succesModifyVehicle = "Vehicle modified";

export const errorMessageVehicle = "Bad Request. Please fill all field.";

export const userID = "1994";

export const bodyRegisterVehicle = (driver_id, plate, model, type, capacity, creation_date) => {
    let body = {
        driver_id: driver_id,
        plate: plate,
        model: model,
        type: type,
        capacity: capacity,
        creation_date: creation_date
    }
    return body;
};

export const fakerPlate = faker.vehicle.vehicle();
export const fakerModel = faker.vehicle.model();
export const fakerType = faker.vehicle.type();
export const fakerCapacity = faker.datatype.number({ min: 2, max: 8 });
export const dateNow = date;