const express = require('express');
const app = express();

const response = {
  data: [],
  services: 'Servicio Monolitico',
  architecture: 'Monolitico'
};

app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get('/api/v1/users', (req, res) => {
  response.data.push('Belu', 'Sebas', 'Valen');
  return res.send(response);
});

app.get('/api/v1/books', (req, res) => {
  response.data.push('Libro 1', 'Libro 2', 'Libro 3');
  return res.send(response);
});

app.get('/api/v1/cars', (req, res) => {
  response.data.push('Chevrolet', 'Ferrari', 'Fiat');
  return res.send(response);
});

module.exports = app;
