const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const server = express();
server.use(helmet());
server.use(express.json());
server.use(cors());

const authRouter = require('../auth/auth-router')
const projectsRouter = require('../projects/projects-router')

server.get("/", (req, res) => {
    res.json({ msg: "api up" });
});

server.use('/api/auth', authRouter)
server.use('/api/projects', projectsRouter)

module.exports = server;
