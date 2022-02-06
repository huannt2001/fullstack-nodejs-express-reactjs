import express from "express";


// config view engine
let ViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
    app.set("views", "./src/views");

}

module.exports = ViewEngine;