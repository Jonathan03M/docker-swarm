const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(process.env.MESSAGE || 'Hola mundo desde Node.js');
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});