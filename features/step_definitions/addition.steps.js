const {Given, When, Then} = require("@cucumber/cucumber");
const expect = require("chai").expect;

let a;
let b;
let sum;

Given('User want to type two integer number', function () {
    a = 10;
    b = 10;
});

When('they perform the addition action', function () {
    sum = a + b;
});

Then('they should get the result as summation of two given numbers', function () {
    expect(sum).to.be.equal(20);
});