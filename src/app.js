const express = require("express");

const app = express();

app.get('/courses', (req, res) => {
    res.status(200).json({
        name: "API Testing"
    });
});

app.get('/course', (req, res) => {
    let name = req.query.name;
    res.status(200).json({
        id: "1",
        name: name
    });
});

app.get("/course/:id", (req, res) => {
    let id = req.params.id;
    let name;
    if(id === "1") {
        name = "mocha";
    } else {
        name = "API Testing"
    };
    res.json({
        id: id,
        name: name
    });
});

app.post('/course/create', (req, res) => {
    //let id = req.body.id;
    let name = req.body.name;
    res.json({
        id: "2",
        name: name
    });
});

module.exports = app;