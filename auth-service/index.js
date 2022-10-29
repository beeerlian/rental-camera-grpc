const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");

//express
var corsOptions = {
	origin: "localhost"
};

const app = express();

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes(app);

const PORT = 8081;
const HOST = "0.0.0.0";
app.listen(PORT, HOST, () => {
	console.log("Server running at http://localhost:8081/");
});
