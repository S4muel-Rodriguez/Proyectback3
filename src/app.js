import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/dbconfig.js';
import mocksRouter from './routes/mocks.router.js';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import { setupSwagger } from './config/swagger.js';
import swaggerDocument from './swagger.json';
setupSwagger(app);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Configuración de variables de entorno
dotenv.config();

// Inicialización de la aplicación
const app = express();
app.use(express.json());

// Conexión a la base de datos
connectDB();

// Rutas
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/mocks', mocksRouter);

// Puerto y servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

