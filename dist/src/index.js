"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rout = (0, express_1.Router)();
const users = [];
rout.get('/hello', (req, res) => {
    res.json({ msg: "Hello world!" });
});
rout.get('/echo/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id });
});
rout.post('/sum', (req, res) => {
    try {
        const { numbers } = req.body;
        if (!Array.isArray(numbers)) {
            throw new Error('numbers must be an array');
        }
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        res.json({ sum });
    }
    catch (error) {
        res.status(400);
    }
});
rout.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        res.status(400).json({ error: "Name and email are required" });
    }
    users.push({ name, email });
    res.json({ message: "User successfully added" });
});
rout.get("/users", (req, res) => {
    res.status(201);
    res.json(users);
});
exports.default = rout;
