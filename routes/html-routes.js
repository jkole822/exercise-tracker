const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.sendFile("index.html");
});

router.get("/stats", (req, res) => {
	res.sendFile("stats.html");
});

router.get("/exercise", (req, res) => {
	res.sendFile("exercise.html");
});

module.exports = router;
