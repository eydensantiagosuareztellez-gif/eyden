/*/ servidor-nativo.js
const http = require('http');
// Esta función se ejecuta UNA VEZ por cada petición que llega
const servidor = http.createServer((req, res) => {
console.log('Llegó una petición:', req.method, req.url);
if (req.method === 'GET' && req.url === '/') {
res.end('Hola desde el servidor');
} else if (req.method === 'GET' && req.url === '/actividades') {
// Para mandar JSON hay que decirlo en un header y convertir a texto a mano
res.setHeader('Content-Type', 'application/json');
res.end(JSON.stringify([{ id: 1, nombre: 'Rafting' }]));
} else {
res.statusCode = 404;
res.end('Ruta no encontrada');
}
});
servidor.listen(3000, () => {
console.log('Escuchando en http://localhost:3000');
});*/

/*/ app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
res.send('API Aventuras San Gil funcionando');
});
app.listen(PORT, () => {
console.log(`Servidor escuchando en http://localhost:${PORT}`);
});*/

const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(`${new Date().toLocaleTimeString()} ${req.method} ${req.url}`);
  next();
});
