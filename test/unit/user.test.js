const User = require('../../src/v1/models/User');

const staticUser = {name: 'john', email: "john@example.com", password: "password"};

describe("User model test", () => {
    test("name is required", async () => {
        expect.assertions(1);

        try {
            await User.create({...staticUser, name: ''});
        } catch (error) {
            expect(error).toBeTruthy();
        }
    })

    test("email is required", async () => {
        expect.assertions(1);
        try {
            await User.create({...staticUser, email: ''});
        } catch (error) {
            expect(error).toBeTruthy();
        }
    })

    test("date must be a valid date", async () => {
        expect.assertions(1);
        try {
            await User.create({...staticUser, date: 'efe'});
        } catch (error) {
            expect(error).toBeTruthy();
        }
    })
})