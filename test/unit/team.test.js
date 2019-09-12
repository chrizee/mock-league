const Team = require('../../src/v1/models/Team');

describe("Team model test", () => {
    test("name is required", async () => {
        expect.assertions(1);

        try {
            await Team.create({name: ''});
        } catch (error) {
            expect(error).toBeTruthy();
        }
    })


})