import {
  bodyRegisterVehicle,
  userID,
  fakerPlate,
  fakerModel,
  fakerType,
  fakerCapacity,
  dateNow,
  successAddVehicle,
  errorMessageVehicle
} from "../../constants"

describe('api/vehicles', () => {

  it('get vehicle by driver id', () => {
    cy.request(userID).then(
      (response) => {
        expect(response.status).to.eq(200)
      }
    )
  });

  it('add new vehicle with valid body', () => {
    let body = bodyRegisterVehicle(userID, fakerPlate, fakerModel, fakerType, fakerCapacity, dateNow);
    cy.request('POST', "/", body)
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.message).contains(successAddVehicle)
      });
  });

  it('add new vehicle with invalid body', () => {
    let badTestUser = bodyRegisterVehicle(fakerPlate, fakerModel, fakerType, fakerCapacity, dateNow);
    cy.request({
      method: 'POST',
      url: "/",
      failOnStatusCode: false,
      body: badTestUser
    }).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.message).contains(errorMessageVehicle)
    });
  });

});
