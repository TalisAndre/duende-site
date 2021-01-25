const express = require("express");
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/download", (request, response) => {
  response.sendFile(__dirname + "/download.html");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Rodando Na porta " + listener.address().port);
});

