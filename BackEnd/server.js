const express = require("express");
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const fs = require("fs");

const hostname = "localhost";
const port = 2000;

//Instanciando express
const app = express();

//Creando el documento donde se guardara la informacion extraida de morgan
const archivoLog = fs.createWriteStream(path.join(__dirname, "serverLog.log"), {
  flags: "a",
});

//Utilizando morgan
app.use(
  morgan(
    " :date[web] :method :url :status :remote-addr :response-time :user-agent",
    { stream: archivoLog },
  ),
);

//Utilizamos body parser pára que todo lo que llegue lo lea en formato json
app.use(bodyParser.json());

//Ruta para definir origen de los archivos (Ruta absoluta)
app.use(express.static(path.join(__dirname, "public")));

require("./server/routes/ownerRoutes")(app);

//Definiendo las herramientas de nuestro servidor
app.use((req, res, next) => {
  //console.log("Cabecera: " + JSON.stringify(req.headers));
  res.statusCode = 200;
  res.header("Content-Type", "text/html");
  res.end(
    "<html> <head><title>Pagina 404</title></head><body><h1>Pagina no existe</h1></body></html>",
  );
});

//Creando el servidor
const server = http.createServer(app);

//Escuchar el servidor
server.listen(port, hostname, () => {
  console.log(
    `El servidor esta funcionando en el puerto : http://${hostname}:${port}`,
  );
});
