const {Given, When, Then} = require("@cucumber/cucumber");
const getCall = require("../../components/get.call");
const expect = require("chai").expect;

let baseUrl;
let response;
let statusCode;
let message;

Given('User use the simple book api url endpoint to access the library data', function () {
    baseUrl = "https://simple-books-api.glitch.me";
});

When('the user hit the get method to access the welcome message', async function () {
    response = await getCall.getWelcomeMessage(baseUrl);
    statusCode = response.statusCode;
    message = response.body.message;
});

Then('the user should able to get the relevant Welcoming response from the simple book api', function () {    
    expect(statusCode).to.be.equal(200);
    expect(message).to.be.equal("Welcome to the Simple Books API.");
});