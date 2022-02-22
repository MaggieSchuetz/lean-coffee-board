const http = require('http');

//erstellt Server und habe mit request Zugriff auf alle requests und kann darauf responden

const server = http.createServer((request, response) => {
  //response ist ein Objekt (Eigentschaften s. GET request), d.h. wir müssen sagen, was responded werden soll, wenn ein GET request kommt
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  //rendert HTML Text unten weil ich content-type auf html gesetzt habe
  response.end('<h1>Hello World!</h1>');
});

// auf welche Adresse soll der server hören? Welche Nachricht soll ich zurückgeben, wenn der Server läuft?
server.listen(3000, () => {
  console.log('Server runs at localhost://3000');
});
