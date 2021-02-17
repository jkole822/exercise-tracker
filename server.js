const express = require("express");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("combined"));

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
