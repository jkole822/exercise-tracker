require("./models/workout");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const htmlRoutes = require("./routes/html-routes");
const apiRoutes = require("./routes/api-routes");
const keys = require("./config/keys.js");
const app = express();

mongoose.connect(keys.mongoURI, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
});

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("combined"));
app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
