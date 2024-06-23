const { getParteAbierto, getPartesUsuarioFecha, ficharEntrada, ficharSalida } = require('../models/asistenciaModel');

const ficharEntradaHandler = async (req, res) => {
    const userId = req.user.id;
    const { date, horaEntrada } = req.body; // Recibe date (dd/mm/yyyy) y horaSalida (HH:mm:ss) desde el frontend

    try {
        const fecha = formatFecha(date);

        const parteAbierto = await getParteAbierto(userId, fecha);
        if (parteAbierto) {
            res.status(400).json({ message: 'Ya tienes un parte abierto para hoy. Debes fichar salida.' });
        } else {
            const horaEntradaDate = convertHoraToDate(date, horaEntrada);
            console.log(horaEntradaDate);

            await ficharEntrada(userId, fecha, horaEntradaDate);
            res.status(201).json({ message: 'Fichado de entrada registrado correctamente.' });
        }
    } catch (error) {
        console.error('Error al fichar entrada:', error);
        res.status(500).json({ message: 'Error del servidor.' });
    }
};

const ficharSalidaHandler = async (req, res) => {
    const userId = req.user.id;
    const { date, horaSalida } = req.body;

    try {
        const fecha = formatFecha(date);

        const parteAbierto = await getParteAbierto(userId, fecha);
        if (!parteAbierto) {
            res.status(400).json({ message: 'No tienes un parte abierto para hoy. Debes fichar entrada primero.' });
        } else {
            const horaSalidaDate = convertHoraToDate(date, horaSalida);
            console.log(horaSalidaDate);

            await ficharSalida(parteAbierto.id, horaSalidaDate);
            res.status(200).json({ message: 'Fichado de salida registrado correctamente.' });
        }
    } catch (error) {
        console.error('Error al fichar salida:', error);
        res.status(500).json({ message: 'Error del servidor.' });
    }
};

const obtenerPartesUsuarioFecha = async (req, res) => {
    const userId = req.user.id; // Obtener el ID del usuario desde el token de autenticación
    const { date } = req.query; 
    try {
        const fecha = formatFecha(date);

        const partesUsuario = await getPartesUsuarioFecha(userId, fecha);

        res.status(200).json(partesUsuario); 
    } catch (error) {
        console.error('Error al obtener los partes del usuario:', error.message);
        res.status(500).json({ message: 'Error del servidor al obtener los partes del usuario.' });
    }
};

// Función para formatear la fecha en 'YYYY-MM-DD', recibiendo dd/mm/yyyy
const formatFecha = (fecha) => {
    const [dia, mes, anio] = fecha.split('/');
    return `${anio}-${mes}-${dia}`;
};

// Función para convertir una hora en formato 'HH:mm:ss' a un objeto Date
const convertHoraToDate = (fecha, hora) => {
    const [dia, mes, anio] = fecha.split('/');
    const [horas, minutos, segundos] = hora.split(':');
    return new Date(anio, mes - 1, dia, horas, minutos, segundos);
};

module.exports = {
    ficharEntradaHandler,
    ficharSalidaHandler,
    obtenerPartesUsuarioFecha
};
