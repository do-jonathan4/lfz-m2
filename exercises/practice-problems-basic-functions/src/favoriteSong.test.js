

describe('favoriteSong(song, artist)', function () {

    beforeEach(function () {
        expect(favoriteSong).to.be.a('function');
        });

        it(`returns "My favorite song is Innuendo by Queen." when given "Innuendo" and "Queen" as arguments`, function () {
            var output = favoriteSong('Innuendo', 'Queen');
            expect(output).to.equal("My favorite song is Innuendo by Queen.");
        });

        it(`returns "My favorite song is Awakening by Jefferson Starship." when given "Awakening" and "Jefferson Starship" as arguments`, function () {
            var output = favoriteSong('Awakening', 'Jefferson Starship');
            expect(output).to.equal("My favorite song is Awakening by Jefferson Starship.");
        });

        it(`returns "My favorite song is Medicated by Sevendust." when given "Medicated" and "Sevendust" as arguments`, function () {
            var output = favoriteSong('Medicated', 'Sevendust');
            expect(output).to.equal("My favorite song is Medicated by Sevendust.");
        });



    });
