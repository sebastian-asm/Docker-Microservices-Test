const server = require('./src/app');

server.listen(process.env.PORT, () =>
  console.log(`Servidor en puerto ${process.env.PORT}`)
);
