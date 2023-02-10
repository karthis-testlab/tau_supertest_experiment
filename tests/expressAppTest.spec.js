const app = require("../src/app");
const request = require("supertest");
const expect = require("chai").expect;

describe("Test suite for validate the course api", () => {

    it("Validate the course name in the courses api", () => {
        request(app)
        .get("/courses")
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);            
            expect(res.body.name).to.be.equal("API Testing");
        });
    });

    it("Validate the path(route) parameter to fetch course name", () => {
        request(app)
        .get("/course/1")
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
            expect(res.body.id).to.be.equal("1");
            expect(res.body.name).to.be.equal("mocha");
        });
    });

    it("Validate the query parameter of the course api", (done) => {
        request(app)
        .get("/course")
        .query({"name": "mocha"})
        .expect(200, {id: "1", name: "mocha"}, done);
    });

    it.only("Validate the create new course functionality", () => {
        request("https://simple-books-api.glitch.me")
        .post("/api-clients")
        .set("Accept", "application/json")
        .send({
            "clientName": "Karthikeyan",
            "clientEmail": "karthikeyan51@example.com"
        })        
        .end((err, res) => {
            expect(res.status).to.be.equal(201);
            //expect(res.body.id).to.be.equal("2");
            //expect(res.body.name).to.be.equal("Supertest");
        })
    })

});