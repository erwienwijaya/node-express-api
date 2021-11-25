const request = require('supertest');
const app = require("../app");

var faker = require("faker");
var firstName = faker.name.firstName();
var lastName = faker.name.lastName();
var phone = faker.phone.phoneNumber();

describe('users test...', () => {
    test('GET /users - all users data', async () => {
        const res = await request(app)
            .get('/api/users');
            
        expect(res.statusCode).toEqual(200)
    })

    test('POST /users - create new user data', async () => {
        const res = await request(app)
            .post('/api/users')
            .send({
                firstname: firstName,
                lastname: lastName,
                phone: phone
            });

        expect(res.statusCode).toEqual(201)    
    })

    test('GET /users/{id} - Find users data', async () => {
        const res = await request(app)
            .get('/api/users/619f6848b6a6f8b3daa37019');
            
        expect(res.statusCode).toEqual(200)
    })

    test('PUT /users - update user data', async () => {
        const res = await request(app)
            .put('/api/users/619f6848b6a6f8b3daa37019')
            .send({
                firstname: firstName,
                lastname: lastName,
                phone: phone
            });

        expect(res.statusCode).toEqual(202)    
    })

    test('DELETE /users - delete user data', async () => {
        const res = await request(app)
            .delete('/api/users/619f7a6b54ac550a007023ef');

        expect(res.statusCode).toEqual(404)    
    })
});
