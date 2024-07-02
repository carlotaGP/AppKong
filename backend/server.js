const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const clientesRoutes = require('./routes/clientesRoutes');
const authRoutes = require('./routes/authRoutes');
const asistenciaRoutes = require('./routes/asistenciaRoutes');
const proyectosRoutes = require('./routes/proyectosRoutes');
const authenticateToken = require('./middleware/authMiddleware');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/asistencia', asistenciaRoutes);
app.use('/api/proyectos', proyectosRoutes);
app.use('/api/clientes', clientesRoutes);
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Acceso autorizado', user: req.user });
});


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Node.js corriendo en http://localhost:${port}`);
});
