

describe('favoriteActivity(activity, reason)', function () {

    beforeEach(function () {
        expect(favoriteActivity).to.be.a('function');
        });

        it(`returns "My favorite activity is hiking, because I really like to hike." when given "hiking" and "to hike" as arguments`, function () {
            var output = favoriteActivity('hiking', 'to hike');
            expect(output).to.equal("My favorite activity is hiking, because I really like to hike.");
        });

        it(`returns "My favorite activity is coding, because I really like to code." when given "coding" and "to code" as arguments`, function () {
            var output = favoriteActivity('coding', 'to code');
            expect(output).to.equal("My favorite activity is coding, because I really like to code.");
        });

        it(`returns "My favorite activity is photography, because I really like to take pictures." when given "photography" and "to take pictures" as arguments`, function () {
            var output = favoriteActivity('photography', 'to take pictures');
            expect(output).to.equal("My favorite activity is photography, because I really like to take pictures.");
        });



    });
