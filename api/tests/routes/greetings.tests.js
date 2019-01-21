const expect = require('chai').expect;

const greetings = require('../../routes/greetings');

let req = {
    body: {},
};

let res = {
    sendCalledWith: '',
    send: function(arg) {
        this.sendCalledWith = arg;
    }
};

describe('Greetings Route', function() {
    describe('Hello() function', function() {
        it('Should error out if no name provided ', function() {
            greetings(req, res);
            expect(res.sendCalledWith).to.contain('error');
        });
    })
});