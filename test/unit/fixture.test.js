const Fixture = require('../../src/v1/models/Fixture');
const Team = require('../../src/v1/models/Team');

describe("Fixture test", () => {
    test("homeTeamId is required", async () => {
        expect.assertions(1);

        try {
            await Fixture.create({homeTeamId: ''});
        } catch (error) {
            expect(error).toBeTruthy();
        }
    })

    test("awayTeamId is required", async () => {
        expect.assertions(1);

        try {
            await Fixture.create({awayTeamId: ''});
        } catch (error) {
            expect(error).toBeTruthy();
        }
    })

    test("team ids must reference teams", async () => {
        expect.assertions(1);
        try {
            await Fixture.create({awayTeamId: 'ede', homeTeamId: 'efw'});
        } catch (error) {
            expect(error).toBeTruthy();
        }
    })    
})