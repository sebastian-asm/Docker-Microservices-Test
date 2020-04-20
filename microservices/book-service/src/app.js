const express = require('express');
const app = express();

const response = {
  data: [],
  services: 'Libros Service',
  architecture: 'Microservicio'
};

const logger = (message) => console.log(`📕 Libros Service: ${message}`);

app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get('/api/v2/books', (req, res) => {
  response.data.push('Libro 1', 'Libro 2', 'Libro 3');
  logger('Obteniendo la información de libros');
  return res.send(response);
});

module.exports = app;
