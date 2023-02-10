const request = require("supertest");
const expect = require("chai").expect;

describe('Test suite for the mocky api application', () => {
    
    //https://run.mocky.io/v3/303dfe09-9b7a-4efb-a575-a9281bcac6e9
    it('Validate the mocky api welcome respose status code', (done) => {
        request("https://run.mocky.io")
        .get("/v3/303dfe09-9b7a-4efb-a575-a9281bcac6e9")
        .expect(200, done);        
    });

    it('Validate the mocky api welcome respose status message', () => {
        request("https://run.mocky.io")
        .get("/v3/303dfe09-9b7a-4efb-a575-a9281bcac6e9")
        .end((err, res) => {
            expect(res.body.message).to.be.equal("Welcome to the API Testing in JavaScript.");
        })
    });

});