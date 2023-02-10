const request = require("supertest");

const getWelcomeMessage = async (baseUrl) => {
    let response = await request(baseUrl)
        .get("/");
    return response;
};

module.exports = {
    getWelcomeMessage
}