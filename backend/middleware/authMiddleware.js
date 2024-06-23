const jwt = require('jsonwebtoken');
const JWT_SECRET = '111'; 

const authenticateToken = (req, res, next) => {
  // 1. Obtener el token de la cabecera 'Authorization'
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1];

  // 2. Verificar si no hay token presente
  if (!token) {
    return res.status(401).json({ message: 'Access Denied' });
  }

  // 3. Verificar y decodificar el token
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error('Error verifying token:', err);
      return res.status(403).json({ message: 'Unauthorized: Invalid token' });
    }
    // 4. Almacenar los datos decodificados del usuario en el objeto de solicitud (req)
    req.user = decoded;

    // 5. Continuar con la ejecución del siguiente middleware o controlador
    next();
  });
};

module.exports = authenticateToken;
