import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/dbconfig.js';
import mocksRouter from './routes/mocks.router.js';

dotenv.config();
const app = express();
app.use(express.json());

// Connect to DB
connectDB();
// Routes
app.use('/api/mocks', mocksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
