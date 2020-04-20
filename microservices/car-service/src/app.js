const express = require('express');
const app = express();

const response = {
  data: [],
  services: 'Autos Service',
  architecture: 'Microservicio'
};

const logger = (message) => console.log(`🚘 Autos Service: ${message}`);

app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get('/api/v2/cars', (req, res) => {
  response.data.push('Chevrolet', 'Ferrari', 'Fiat');
  logger('Obteniendo la información de autos');
  return res.send(response);
});

module.exports = app;
