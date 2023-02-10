const express = require("express");
const request = require("supertest");
const expect = require("chai").expect;

//API Main code
const app = express();
app.get('/status', (err, res) => {
    res.status(200).json({
        "status": "OK"
    });
});

describe('First Express App Test the Response', () => {
    it('Vaildate the status call response', () => {
        request(app)
        .get('/status')
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(201);
            expect(res.body.status).to.be.equal('OK');
        });
    })
});