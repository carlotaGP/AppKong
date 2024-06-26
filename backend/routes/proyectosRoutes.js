const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');
const { obtenerIdProyectos, obtenerProyectosPorIds } = require('../controllers/proyectosController');

router.use(authenticateToken);

router.get('/id-proyectos', obtenerIdProyectos);
router.post('/proyectos', obtenerProyectosPorIds);

module.exports = router;