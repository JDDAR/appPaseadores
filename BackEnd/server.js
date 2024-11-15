const express = require("express");
const http = require("http");

const hostname = "localhost";
const port = 2000;

//Instanciando express
const app = express();

//Definiendo las herramientas de nuestro servidor
app.use((req, res, next) => {
  console.log("Cabecera: " + JSON.stringify(req.headers));
  res.statusCode = 200;
  res.header("Content-Type", "text/html");
  res.end(
    "<html> <head><title></title>Pagina01</head><body><h1>Pagina01</h1></body></html>",
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
