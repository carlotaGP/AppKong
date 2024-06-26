const sql = require('mssql');
const config = require('../config/dbConfig');

let pool;

const connectToDb = async () => {
    if (!pool) {
        pool = await sql.connect(config);
    }
    return pool;
};

const getIdProyectos = async (userId, date) => {
    try {
        const pool = await connectToDb();

        let result = await pool.request()
        .input('userId', sql.Int, userId)
        .input('date', sql.Date, date)
        .query(`SELECT id_proyecto FROM CALENDARIO
                WHERE (id_usuario = @userId OR id_usuario = 0) AND fecha = @date`);
        return result.recordset;
    } catch (error) {
        console.error('Error al obtener registro de asistencia:', error.message);
        throw error;
    }
};

const getProyectos = async (ids) => {
    try {
        const pool = await connectToDb();

        // Extraer los IDs numéricos de los objetos recibidos
        const idProyectos = ids.map(obj => obj.id_proyecto);

        let request = pool.request();
        
        // Convertir array de IDs en formato adecuado para SQL
        const idsString = idProyectos.join(',');

        const query = `SELECT * FROM PROYECTOS WHERE id IN (${idsString})`;
        let result = await request.query(query);
        return result.recordset;
    } catch (error) {
        console.error('Error al obtener los proyectos por IDs:', error.message);
        throw error;
    }
};

module.exports = {
    getIdProyectos,
    getProyectos
};