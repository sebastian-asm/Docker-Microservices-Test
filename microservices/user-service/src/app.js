const express = require('express');
const app = express();

const response = {
  data: [],
  services: 'Usuario Service',
  architecture: 'Microservicio'
};

const logger = (message) => console.log(`👨‍💻 Usuario Service: ${message}`);

app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get('/api/v2/users', (req, res) => {
  response.data.push('Belu', 'Sebas', 'Cata');
  logger('Obteniendo la información de usuarios');
  return res.send(response);
});

module.exports = app;
